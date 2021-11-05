const ngrok = require("ngrok");
const fs = require("fs");
const {
  getConfiguredPassport,
  addClaimsToStrategy,
} = require("../controllers/security/passport");

const configServer = (
  server,
  https,
  port,
  isProduction,
  handle,
  serverConfiguration
) => {
  return new Promise((resolve, reject) => {
    if (
      process.env.KEY_PATH &&
      process.env.CERT_PATH &&
      process.env.CERT_PASS
    ) {
      let key = fs.readFileSync(process.env.KEY_PATH);
      let cert = fs.readFileSync(process.env.CERT_PATH);
      let passphrase = process.env.CERT_PASS;

      https
        .createServer(
          {
            key: key,
            cert: cert,
            passphrase: passphrase,
          },
          server
        )
        .listen(port, (err) => {
          if (err) throw err;
          serverConfiguration.endpoint = process.env.ENDPOINT;

          console.log(`running with SSL and port is ${port}`);
          return serverConfiguration.endpoint;
        });
    } else {
      server.listen(port, async (err) => {
        if (err) throw err;

        if (isProduction) {
          console.log(
            `running in production is ${isProduction} and port is ${port}`
          );
          serverConfiguration.endpoint = process.env.ENDPOINT;
          console.log(`configuring the passport`);
          let { passport, client } = await getConfiguredPassport(
            isProduction,
            serverConfiguration.endpoint
          );
          console.log(`serverConfig.js:: finshed passport config`)
          console.log(client)
          resolve({
            endpoint: serverConfiguration.endpoint,
            passport: passport,
            client: client,
          });
        } else {
          console.log(`running in development`);
          ngrok.connect(port).then(async (ngrokUrl) => {
            serverConfiguration.endpoint = ngrokUrl;
            console.log(`running, open at ${serverConfiguration.endpoint}`);
            console.log(`configuring the passport`);
            let { passport, client } = await getConfiguredPassport(
              isProduction,
              ngrokUrl
            );

            resolve({
              endpoint: serverConfiguration.endpoint,
              passport: passport,
              client: client,
            });
          });
        }
      });
    }
  });
};

const updatePassportConfig = (passport, claims, client, jwt = null) => {
  let _user_info_request = process.env.USER_INFO
    ? process.env.USER_INFO
    : "vm.project-grids.eu";
  let _user_info_port = process.env.USER_INFO_PORT
    ? process.env.USER_INFO_PORT
    : "8180";
  console.log(`serverConfig.js::updatePassportConfig:: jtw: ${jwt}`);
  addClaimsToStrategy(
    claims,
    passport,
    _user_info_request,
    _user_info_port,
    client,
    jwt
  );
};

exports.configServer = configServer;
exports.updatePassportConfig = updatePassportConfig;
