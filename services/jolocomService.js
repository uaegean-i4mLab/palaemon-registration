import { updateSessionData } from "./sealService";
const qr = require("qr-image");
const imageDataURI = require("image-data-uri");
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
import { vcTypes } from "../config/vcTypes";
import { AuthenticationProcessor } from "../utils/jolocomProcessors/authenticationProcessor";
// import session from "express-session";
const jsesc = require("jsesc");

const getProcessor = async (jwt, agent) => {
  let authProcessor = new AuthenticationProcessor();
  let processors = [authProcessor];
  // Fetching interaction instance to define processor type based on provided jwt
  const interaction = await agent.findInteraction(jwt);
  // Defining appropriate processor based on interaction flow type
  const processor = processors.find(
    (processor) => processor.supportedType() === interaction.flow.type
  );
  if (!processor) {
    throw new RuntimeException(
      `Can't find processor for '${interaction.flow.type}' interaction flow type.`
    );
  }
  return processor;
};

const handleJolocomFlow = async (jwt, agent) => {
  // Defining appropriate processor based on provided jwt type
  try {
    await agent.findInteraction(jwt);
  } catch (error) {
    // response.status(StatusCodes.NOT_FOUND).json({
    //   message: `Interaction with token '${request.body.token}' not found.`
    // })
    console.log(error);
  }
  const processor = await getProcessor(jwt, agent);
  let token;
  try {
    // Processing jwt and receiving token of the latest interaction message
    token = await processor.process(jwt, agent);
  } catch (error) {
    throw new RuntimeException(
      `Unable to process interaction with type '${processor.supportedType()}'. ${error}.`
    );
  }
  console.log(
    `'${processor.supportedType()}' interaction request processed successfully. Token nonce: '${
      token.nonce
    }'.`
  );
  return token;
};

const makeConnectionRequest = async (
  sealSession,
  vcType,
  isMobile,
  callback,
  sessionId,
  issuerAgent
) => {
  const authRequest = await issuerAgent.authRequestToken({
    callbackURL: `${callback}`,
    description: "connect with SEAL/myIDs SSI Issuer?",
  });
  // console.log(authRequest);
  var code = qr.image(authRequest.encode(), {
    type: "png",
    ec_level: "H",
    size: 10,
    margin: 10,
  });
  let mediaType = "PNG";
  let encodedQR = imageDataURI.encode(await streamToBuffer(code), mediaType);
  // store in the sessionManager the (sealSession,issuerSession)
  let sessionUpdated = await updateSessionData(
    sealSession,
    "issuerSession",
    sessionId
  );
  //res.send({ qr: encodedQR, uuid: sealSession });
  return { qr: encodedQR, uuid: sealSession };
};

const connectionResponseServ = async (
  jwtResponse,
  issuerAgent,
  sealSessionId
) => {
  const userConnectionResponse = await issuerAgent.processJWT(jwtResponse);
  const did = userConnectionResponse.participants.responder.didDocument.did;
  let sessionUpdated = await updateSessionData(sealSessionId, "DID", did);
  let responseToken =
    await userConnectionResponse.createAuthenticationResponse();
  // console.log(responseToken.encode());
  // console.log("!@#");
  return responseToken.encode();
};

const makeCredentialOffer = async (
  sealSession,
  vcType,
  userAttributes,
  callback,
  isMobile,
  issuerAgent
) => {
  // let did = await getSessionData(sealSession, "DID");
  //store the attributes of the user in session to get them from the call of the wallet
  await updateSessionData(
    sealSession,
    "user",
    jsesc(userAttributes, {
      json: true,
    })
  );
  let credentialOfferJSON = {
    callbackURL: callback,
    offeredCredentials: [
      {
        type: vcType,
      },
    ],
  };
  if (vcType.indexOf("disposable") >= 0) {
    console.log("issueVCJOLO---- offer is isEramsus ");
    credentialOfferJSON.offeredCredentials.push({
      type: "UAegean_Disposable_ID",
    });
  }

  let credentialOffer = await issuerAgent.credOfferToken(credentialOfferJSON);
  let code = qr.image(credentialOffer.encode(), {
    type: "png",
    ec_level: "H",
    size: 20,
    margin: 10,
  });
  let mediaType = "PNG";
  let encodedQR = imageDataURI.encode(await streamToBuffer(code), mediaType);
  return { qr: encodedQR };
};

const makeVC = async (
  credType,
  userData,
  userDID,
  responseToken,
  issuerAgent
) => {
  const simpleExampleCredMetadata = {
    type: ["VerifiableCredential", credType],
    name: credType,
    context: [
      {
        SimpleExample: `https://seal.project.eu/terms/${credType}`,
        schema: "https://schema.org/",
        source: "schema:source",
      },
    ],
  };
  let claimValues = {};
  if (
    credType.indexOf(vcTypes.eidas) >= 0 ||
    credType.indexOf(vcTypes.aegean) >= 0
  ) {
    simpleExampleCredMetadata.context[0].family_name = "schema:familyName";
    simpleExampleCredMetadata.context[0].given_name = "schema:name";
    simpleExampleCredMetadata.context[0].date_of_birth = "schema:brithDate";
    simpleExampleCredMetadata.context[0].person_identifier = "schema:Person";
    simpleExampleCredMetadata.context[0].loa = "schema:loa";
    claimValues.family_name = userData.eidas.FamilyName;
    claimValues.given_name = userData.eidas.GivenName;
    claimValues.date_of_birth = userData.eidas.DateOfBirth;
    claimValues.person_identifier = userData.eidas.PersonIdentifier;
    claimValues.loa = userData.eidas.LevelOfAssurance;
    if (credType.indexOf(vcTypes.aegean) >= 0) {
      claimValues.affiliation = userData.eidas.affiliation;
      claimValues.hostingInstitution = userData.eidas.hostingInstitution;
      claimValues.starts = userData.eidas.starts;
      claimValues.expires = userData.eidas.expires;
    }
  }
  if (credType.indexOf(vcTypes.edugain) >= 0) {
    simpleExampleCredMetadata.context[0].family_name = "schema:familyName";
    simpleExampleCredMetadata.context[0].given_name = "schema:name";
    simpleExampleCredMetadata.context[0].date_of_birth = "schema:brithDate";
    simpleExampleCredMetadata.context[0].person_identifier = "schema:Person";
    simpleExampleCredMetadata.context[0].loa = "schema:loa";
    claimValues.cn = userData.edugain.cn;
    claimValues.eduOrgHomePageURI = userData.edugain.eduOrgHomePageURI;
    claimValues.eduOrgLegalName = userData.edugain.eduOrgLegalName;
    claimValues.eduOrgPostalAddress = userData.edugain.eduOrgPostalAddress;
    claimValues.l = userData.edugain.l;
    claimValues.schacExpiryDate = userData.edugain.schacExpiryDate;
    claimValues.schacHomeOrganization = userData.edugain.schacHomeOrganization;
    claimValues.eduPersonAffiliation = userData.edugain.eduPersonAffiliation;
    claimValues.eduPersonPrincipalName =
      userData.edugain.eduPersonPrincipalName;
    claimValues.eduPersonPrincipalNamePrior =
      userData.edugain.eduPersonPrincipalNamePrior;
    claimValues.eduPersonOrgUnitDN = userData.edugain.eduPersonOrgUnitDN;
    claimValues.eduPersonUniqueId = userData.edugain.eduPersonUniqueId;
    claimValues.displayName = userData.edugain.displayName;
    claimValues.givenName = userData.edugain.givenName;
    claimValues.mail = userData.edugain.mail;
    claimValues.mobile = userData.edugain.mobile;
    claimValues.o = userData.edugain.o;
    claimValues.sn = userData.edugain.sn;
    claimValues.schacPersonalUniqueCode =
      userData.edugain.schacPersonalUniqueCode;
    claimValues.schacPersonalUniqueID = userData.edugain.schacPersonalUniqueID;
    claimValues.eduPersonTargetedID = userData.edugain.eduPersonTargetedID;
  }

  const offeredCredential = await issuerAgent.signedCredential(
    {
      metadata: simpleExampleCredMetadata,
      subject: userDID,
      claim: claimValues,
    },
    "mySecretPassword"
  );
  const userIssuerInteraction = await issuerAgent.processJWT(responseToken);
  return {
    token: (
      await userIssuerInteraction.createCredentialReceiveToken([
        offeredCredential,
      ])
    ).encode(),
  };
};

export {
  makeConnectionRequest,
  connectionResponseServ,
  makeCredentialOffer,
  makeVC,
  handleJolocomFlow,
};
