import {
  makeConnectionRequest,
  connectionResponseServ,
  makeCredentialOffer,
  makeVC,
  handleJolocomFlow
} from "../services/jolocomService";

import { getSealSessionData } from "../services/sealService";

import { publish } from "../services/sse-service";

const makeConnectionRequestController = async (req, res, issuerAgent) => {
  let sealSession = req.body.sealSession;
  let vcType = req.body.vcType;
  let isMobile = req.body.isMobile ? true : false;
  let callback = req.baseUrl
    ? `${req.session.endpoint}/${req.baseUrl}/connectionResponse?sealSession=${sealSession}`
    : req.session.endpoint + "/connectionResponse?sealSession=" + sealSession;
  let sessionId = req.session.id;
  console.log(
    "jolocom-api-contorller, makeConnectionRquest callback::" + callback
  );
  let response = await makeConnectionRequest(
    sealSession,
    vcType,
    isMobile,
    callback,
    sessionId,
    issuerAgent
  );
  res.send(response);
};

const handleConnectionResponse = async (req, res, issuerAgent) => {
  console.log("jolocom-api-controller.js handleConnectionResponse ");
  const sealSessionId = req.query.sealSession; //get the sesionId that is picked up from the response uri
  const jwtResponse = req.body.token;
  // retrieve the server sessionId from the SesssionManager
  let serverSession = await getSealSessionData(sealSessionId, "issuerSession");
  
  const responseToken = await  handleJolocomFlow(req.body.token, issuerAgent)

  // console.log("handleConnectionResponse")
  // console.log(jwtResponse)
  
  let responseForUserWallet = await connectionResponseServ(
    jwtResponse,
    issuerAgent,
    sealSessionId
  );

  req.session.did = true;
  publish(
    JSON.stringify({
      uuid: sealSessionId,
      sessionId: serverSession,
      status: "connected",
    })
  );

  // TODO: Make common responce preparation and creation
  console.log(token.encode())
  res.json({ token: responseToken.encode() })
};

const handleVCRequestController = async (req, res, issuerAgent, endpoint) => {
  let sealSession = req.body.sealSession;
  let vcType = req.body.vcType;
  let isMobile = req.body.isMobile ? true : false;
  let userData = req.session.userData;
  // req.session.endpoint = endpoint;
  // req.session.baseUrl = process.env.BASE_PATH;
  
  let callback = process.env.BASE_PATH
    ? `${endpoint}/${process.env.BASE_PATH}/offerResponse?vcType=${vcType}&seal=${sealSession} `
    : endpoint + `/offerResponse?vcType=${vcType}&seal=${sealSession} `;
  // console.log("handleVCRequestController userData in session")
  // console.log(userData)
  console.log("handleVCRequestController the callback is " + callback)
  let response = await makeCredentialOffer(
    sealSession,
    vcType,
    userData,
    callback,
    isMobile,
    issuerAgent
  );
  res.send(response);
};

const handleVCResponseController = async (req, res, issuerAgent) => {
  let sealSessionId = req.query.seal;
  let vcType = req.query.vcType;
  let userAttributes = JSON.parse(
    await getSealSessionData(sealSessionId, "user")
  );
  console.log("handleVCResponseController")
  console.log(userAttributes)
  let userDID = await getSealSessionData(sealSessionId, "DID");
  let userResponseToken = req.body.token;
  let response = await makeVC(
    vcType,
    userAttributes,
    userDID,
    userResponseToken,
    issuerAgent
  );
  res.send(response);
};

export {
  makeConnectionRequestController,
  handleConnectionResponse,
  handleVCRequestController,
  handleVCResponseController,
};
