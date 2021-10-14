const ngrok = require("ngrok");
const { getConfiguredPassport } = require('../controllers/security/passport');

const configServer = (
  server,
  https,
  port,
  isProduction,
  handle,
  serverConfiguration
) => {

  if (process.env.KEY_PATH && process.env.CERT_PATH && process.env.CERT_PASS) {
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
      } else {
        console.log(`running in development`);
        ngrok.connect(port).then(async (ngrokUrl) => {
          serverConfiguration.endpoint = ngrokUrl;
          console.log(`running, open at ${serverConfiguration.endpoint}`);
          console.log(`configuring the passport`)
          const passport = await getConfiguredPassport(
            ngrokUrl
          );
          
          return serverConfiguration.endpoint;
        });
      }
    });
  }
};

exports.configServer = configServer;
