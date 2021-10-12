const ngrok = require("ngrok");

const configServer = (server, https, port,isProduction, handle, serverConfiguration) => {
  
  server.all("*", (req, res) => {
    return handle(req, res);
  });
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
    server.listen(port, (err) => {
      if (err) throw err;

      if (isProduction) {
        console.log(
          `running in production is ${isProduction} and port is ${port}`
        );
        serverConfiguration.endpoint = process.env.ENDPOINT;
      } else {
        ngrok.connect(port).then((ngrokUrl) => {
          serverConfiguration.endpoint = ngrokUrl;
          console.log(`running, open at ${serverConfiguration.endpoint}`);
          return serverConfiguration.endpoint;
        });
      }
    });
  }
};

exports.configServer = configServer;
