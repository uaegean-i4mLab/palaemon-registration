import { getSealSessionData, validateToken } from "../services/sealService";
import { endpoints } from "../config/seal_endpoints";
import { parseSealAttributeSet } from "../utils/dataStoreHelper";
import { defaultClaims } from "../config/defaultOidcClaims";
import { updatePassportConfig } from "../config/serverConfig";
import { v4 as uuidv4 } from "uuid";
import { getSessionData, setOrUpdateSessionData } from "../services/redis";

const kybWizard = async (app, req, res, endpoint) => {
  req.userDetails = {
    lei: "529900ENKWV3BZ5GYL12",
    address: null,
    birthdate: null,
    business_role: null,
    trading_status: "LIVE",
    legal_name: "360kompany AG",
    sub_jurisdiction: "AT",
    sic: '["7375 - Informationsabruf von entfernten Datenbanken","1450 - Media","73759903 - Remote data base information retrieval","63120 - Web portals"]',
    given_name: null,
    vat_registration: "ATU67091005",
    legal_person_identifier: "375714x",
    family_name: null,
  };

  return app.render(req, res, "/kyb/wizard", req.query);
};

const companySelection = async (app, req, res) => {
  let sessionId = uuidv4();
  // console.log(`created the following session ${sessionId}`);
  // read cookies
  // console.log(req.cookies);

  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: false, // Indicates if the cookie should be signed
  };

  // Set cookie
  res.cookie("sessionId", sessionId, options); // options is optional
  return app.render(req, res, "/kyb/company-selection", req.query);
};

const startLogin = async (app, req, res, serverPassport, oidcClient) => {
  let lei = req.body.lei;
  let companyName = req.body.companyName;
  let companyCountry = req.body.companyCountry;
  // console.log(`${lei}-${companyCountry}-${companyName}`)
  // console.log("the passport!!!")
  // console.log(passport);
  let claims = defaultClaims;
  // if(lei)
  // claims.userinfo.verified_claims.claims.lei= lei
  if (companyName)
    claims.userinfo.verified_claims.claims.legal_name = companyName;
  let sessionId = req.cookies.sessionId;
  setOrUpdateSessionData(sessionId,"selfLEI", lei);
  updatePassportConfig(serverPassport, claims, oidcClient);
  res.redirect(307, "/login");
};

const validateRelationship = async (app, req, res, endpoint) => {
  let sessionId = req.cookies.sessionId;
  let userDetails = await getSessionData(sessionId, "userDetails");
  let selfLei = await getSessionData(sessionId, "selfLEI");
  // console.log(`sessionId ${sessionId} details:`)
  req.userDetails = userDetails;
  req.selfLei = selfLei
  // console.log(userDetails)
  /*
  {
  lei: '529900ENKWV3BZ5GYL12',
  address: null,
  birthdate: '1965-01-01',
  business_role: null,
  trading_status: 'LIVE',
  legal_name: '360kompany AG',
  sub_jurisdiction: 'AT',
  sic: '["7375 - Informationsabruf von entfernten Datenbanken","1450 - Media","73759903 - Remote data base information retrieval","63120 - Web portals"]',
  given_name: 'claude',
  vat_registration: 'ATU67091005',
  legal_person_identifier: '375714x',
  family_name: 'Phil',
  personal_number: 'el/el/11111'
}
  */
  return app.render(req, res, "/kyb/validate-relation", req.query);
};

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

export {
  issueEidas,
  handleIssueEidasResponse,
  issueMyID,
  kybWizard,
  companySelection,
  startLogin,
  validateRelationship,
};
