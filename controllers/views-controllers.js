import { getSealSessionData, validateToken } from "../services/sealService";
import { endpoints } from "../config/seal_endpoints";
import { parseSealAttributeSet } from "../utils/dataStoreHelper";

const issueEidas = async (app, req, res, endpoint) => {
  //if we are redirected from mobile
  if (req.query.sealSession) {
    req.session.sealSession = req.query.sealSession;
    let did = await getSealSessionData(
      req.query.sealSession,
      "DID",
      0,
      endpoints.sealSMUri,
      endpoints.sealSMPort
    );
    console.log(
      `for the session ${req.query.sealSession}  i got the DID data ${did}`
    );
    if (did) {
      req.session.DID = true;
    }
  }
  req.session.endpoint = endpoint;
  // console.log("ENDPOINT");
  // console.log(req.session.endpoint);
  req.session.baseUrl = process.env.BASE_PATH;
  req.eidasUri = endpoints.sealEidasUri;
  req.eidasPort = endpoints.sealEidasPort;
  let redirect = process.env.BASE_PATH
    ? `${endpoint}/${process.env.BASE_PATH}/vc/issue/eidas/response`
    : `${endpoint}/vc/issue/eidas/response`;
  req.eidasRedirectUri = redirect;
  //   console.log(req.eidasRedirectUri);
  return app.render(req, res, "/vc/issue/eidas", req.query);
};

const handleIssueEidasResponse = async (app, req, res, endpoint) => {
  const msToken = req.body.msToken;
  // sessionId is provided by the caller
  let sessionId = await validateToken(msToken);
  let dataStore = JSON.parse(await getSealSessionData(sessionId, "dataStore"));
  let eidasAttributes = dataStore.clearData.find((dataSet) => {
    return dataSet.type === "eIDAS";
  }).attributes;
  let updatedUsersAttributes = parseSealAttributeSet(
    eidasAttributes,
    null,
    "eidas"
  );
  // console.log(updatedUsersAttributes);
  req.session.DID = true;
  req.session.userData = updatedUsersAttributes;
  req.session.sealSession = sessionId;

  req.session.endpoint = endpoint;
  req.session.baseUrl = process.env.BASE_PATH;
  return app.render(req, res, "/vc/issue/eidas", req.query);
};

const issueMyID = async (app, req, res, endpoint) => {
  // if (req.query.msToken) {
  //   let sessionId = await validateToken(req.query.msToken);
  //   let ds = await getSealSessionData(sessionId, "dataStore");
  //   let did = await getSealSessionData(sessionId, "DID");
  //   if (did) {
  //     req.session.DID = true;
  //   }
  //   if (ds) {
  //     let dataStore = JSON.parse(ds);
  //     req.session.userData = makeUserDetails(dataStore);
  //   }
  //   req.session.sealSession = sessionId;
  // }
  //if we are redirected from mobile
  if (req.query.sealSession) {
    req.session.sealSession = req.query.sealSession;
    let did = await getSessionData(req.query.sealSession, "DID");
    if (did) {
      req.session.DID = true;
    }
  }
  req.session.endpoint = endpoint;
  req.session.baseUrl = process.env.BASE_PATH;
  req.eidasUri = endpoints.sealEidasUri;
  req.eidasPort = endpoints.sealEidasPort;
  req.edugainUri = endpoints.sealEdugainUri;
  req.edugainPort = endpoints.sealEdugainPort;
  let redirect = process.env.BASE_PATH
    ? `${endpoint}/${process.env.BASE_PATH}/vc/issue/myID/response`
    : `${endpoint}/vc/issue/myID/response`;
  req.eidasRedirectUri = redirect;
  console.log(req.eidasRedirectUri);
  return app.render(req, res, "/vc/issue/myID", req.query);
};

export { issueEidas, handleIssueEidasResponse, issueMyID };
