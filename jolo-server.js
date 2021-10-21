import { getSessionConfg, getCacheStore } from "./config/sessionConf";
import { configServer } from "./config/serverConfig";
import { initAgent } from "./config/jolocomAgent";
import {
  issueEidas,
  handleIssueEidasResponse,
  issueMyID,
  kybWizard,
  companySelection,
} from "./controllers/views-controllers";
import {
  startSession,
  makeEidasRedirectionToken,
  updateSession,
  
} from "./controllers/seal-api-controllers";
import {
  makeConnectionRequestController,
  handleConnectionResponse,
  handleVCRequestController,
  handleVCResponseController,
} from "./controllers/jolocom-api-controller";
import { jwksController } from "./controllers/jwks-controllers";
import { subscribe } from "./services/sse-service";
import winston from "winston";
import expressWinston from "express-winston";

const KeycloakMultiRealm = require("./config/KeycloakMultiRealm");
const express = require("express");
const https = require("https");
const fs = require("fs");
const next = require("next");
const jsesc = require("jsesc");
const request = require("request-promise");
const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const bodyParser = require("body-parser");
const session = require("express-session");
const axios = require("axios");
const moment = require("moment");
const app = next({ dev });
const handle = app.getRequestHandler();
const {
  getConfiguredPassport,
  passportController,
} = require("./controllers/security/passport");

// server session cache config
const isProduction = process.env.NODE_ENV === "production";
const SESSION_CONF = getSessionConfg(isProduction);

// configure Keycloak connector for OIDC support
const ldapConfing = JSON.parse(
  fs.readFileSync("./config/keycloakRealms/ldapKeycloak.json")
);
const eidasRealmConfig = JSON.parse(
  fs.readFileSync("./config/keycloakRealms/eidasKeycloak.json")
);
const taxisRealmConfig = JSON.parse(
  fs.readFileSync("./config/keycloakRealms/taxisKeycloak.json")
);
const keycloak = new KeycloakMultiRealm({ store: getCacheStore() }, [
  // esmoRealmConfig,
  eidasRealmConfig,
  taxisRealmConfig,
  ldapConfing,
]);

//Configure and Start the server
let serverConfiguration = { endpoint: "" };

app.prepare().then(async () => {
  const server = express();

  // // Log the whole request and response body
  // expressWinston.requestWhitelist.push("body");
  // expressWinston.responseWhitelist.push("body");
  // server.use(expressWinston.logger({
  //   transports: [
  //     new winston.transports.Console({
  //       json: true,
  //       colorize: true
  //     })
  //   ]
  // }))

  server.set("trust proxy", 1); // trust first proxy
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json({ type: "*/*" }));
  server.use(session(SESSION_CONF));
  // server.use(keycloak.middleware());

  // initiate the jolocom agent
  const issuerAgent = await initAgent();

  //CONTROLLERS

  //sse
  server.get("/events", subscribe);

  //view
  server.get(["/kyb/wizard"], async (req, res) => {
    console.log("/kyb/wizard");
    return kybWizard(app, req, res, serverConfiguration.endpoint);
  });
  server.get(["/company-selection"], async (req, res) => {
    console.log("/company-selection");
    return companySelection(app, req, res, serverConfiguration.endpoint);
  });

  server.post(["/start-login"], async (req,res)=>{
    console.log("/start-login");
    let lei = req.body.lei
    let companyName = req.body.companyName
    let company = req.body.company
    console.log(`${lei}-${company}-${companyName}`)
    res.redirect(307, '/login');
  })



  server.get(["/vc/issue/eidas"], async (req, res) => {
    console.log("/vc/issue/eidas");
    return issueEidas(app, req, res, serverConfiguration.endpoint);
  });
  server.post(["/vc/issue/eidas/response"], async (req, res) => {
    console.log("vc/issue/eidas/response");
    return handleIssueEidasResponse(
      app,
      req,
      res,
      serverConfiguration.endpoint
    );
  });

  server.get(["/vc/issue/myID"], async (req, res) => {
    console.log("/vc/issue/myID");
    return issueMyID(app, req, res, serverConfiguration.endpoint);
  });
  server.post(["/vc/issue/myID/response"], async (req, res) => {
    console.log("vc/issue/eidas/response");
    return handleIssueEidasResponse(
      app,
      req,
      res,
      serverConfiguration.endpoint
    );
  });

  //seal
  server.post(["/seal/start-session"], async (req, res) => {
    console.log("/seal/start-session");
    await startSession(app, req, res, serverConfiguration.endpoint);
  });
  server.get(["/seal/make-eidas-token"], async (req, res) => {
    console.log("/seal/make-eidas-token");
    res.send(
      await makeEidasRedirectionToken(req, res, serverConfiguration.endpoint)
    );
  });
  server.post(["/seal/update-session"], async (req, res) => {
    console.log("/seal/update-session ");
    res.send(await updateSession(req, res, serverConfiguration.endpoint));
  });

  // session
  server.post(["/start-session"], async (req, res) => {
    console.log("/start-session");
    await startSession(app, req, res, serverConfiguration.endpoint);
  });
  server.post(["/update-session"], async (req, res) => {
    console.log("/update-session ");
    res.send(await updateSession(req, res, serverConfiguration.endpoint));
  });

  //jolo
  server.post(["/makeConnectionRequest"], async (req, res) => {
    console.log("/makeConnectionRequest");
    makeConnectionRequestController(req, res, issuerAgent);
  });

  server.post(["/connectionResponse"], async (req, res) => {
    console.log("/connectionResponse");
    handleConnectionResponse(req, res, issuerAgent);
  });

  server.post(["/issueVC"], async (req, res) => {
    console.log("/issueVC");
    // console.log(req.body)
    handleVCRequestController(
      req,
      res,
      issuerAgent,
      serverConfiguration.endpoint
    );
  });

  server.post(["/offerResponse"], async (req, res) => {
    console.log("/offerResponse");
    handleVCResponseController(req, res, issuerAgent);
  });

 
  // this call needs to be on the end of the config as, the handle(*,*) must be last
  // otherwise the rest of the controllers are ignored
  configServer(server, https, port, isProduction, handle, serverConfiguration);
  // grids login flow, all /login*.* uris will be handles by the passportController router
  server.use("/login", passportController);

  server.use("/jwks", jwksController);
  server.all("*", async (req, res) => {
    return handle(req, res);
  });
});
