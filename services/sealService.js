import { endpoints } from "../config/seal_endpoints";
import { sendSignedHttp } from "./httpSignature";

const KEY_ID =
  "d9db7614221d9d397f98d44f90eb15db5a4e0d842ffadfd7f1651963ccb22437";

const updateSessionData = async (sessionId, variableName, variableValue) => {
  let updateObject = {
    sessionId: sessionId,
    variableName: variableName,
    dataObject: variableValue,
  };
  return new Promise((resolve, reject) => {
    sendSignedHttp(
      endpoints.sealSMUri,
      "/sm/updateSessionData",
      "post",
      KEY_ID,
      "application/json; charset=utf-8",
      updateObject,
      false,
      endpoints.sealSMPort
    )
      .then((response) => {
        // console.log(
        //   `sealService.js pdateSessionData response for variable ${variableName} and value ${variableValue}`
        // );
        // console.log(response);
        resolve(response.code);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const getSealSessionData = async (
  sessionId,
  variableName,
  counter = 0,
  SEAL_SM_URI,
  SEAL_SM_PORT
) => {
  return new Promise((resolve, reject) => {
    sendSignedHttp(
      endpoints.sealSMUri,
      "/sm/getSessionData?sessionId=" + sessionId,
      "get",
      KEY_ID,
      "application/x-www-form-urlencoded",
      null,
      false,
      endpoints.sealSMPort
    )
      .then((response) => {
        // console.log(`sealService.js, getSessionDATA::`);
        // console.log(response);
        resolve(response.sessionData.sessionVariables[variableName]);
      })
      .catch((err) => {
        console.log(err);
        if (counter < 2) {
          resolve(getSealSessionData(sessionId, variableName, counter + 1));
        } else {
          reject(err);
        }
      });
  });
};

const startSealSession = (sealSMUri, sealSMPort) => {
  console.log(
    "sealService.js: startSealSession " + sealSMUri + " " + sealSMPort
  );
  return new Promise((resolve, reject) => {
    sendSignedHttp(
      sealSMUri,
      "/sm/startSession",
      "post",
      KEY_ID,
      "application/x-www-form-urlencoded",
      null,
      true,
      sealSMPort
    )
      .then((response) => {
        resolve(response.sessionData.sessionId);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const makeRedirectionToken = (sessionId, sender, receiver, counter = 0) => {
  return new Promise((resolve, reject) => {
    sendSignedHttp(
      endpoints.sealSMUri,
      `/sm/generateToken?sender=${sender}&receiver=${receiver}&sessionId=${sessionId}`,
      "get",
      KEY_ID,
      "application/x-www-form-urlencoded",
      null,
      false,
      endpoints.sealSMPort
    )
      .then((resp) => {
        // console.log(resp);
        resolve(resp);
      })
      .catch((err) => {
        console.log(err);
        if (counter < 2) {
          resolve(generateToken(sessionId, sender, receiver, counter + 1));
        } else {
          reject(err);
        }
      });
  });
};

const validateToken = (msToken, counter = 0) => {
  return new Promise((resolve, reject) => {
    sendSignedHttp(
      endpoints.sealSMUri,
      "/sm/validateToken?token=" + msToken,
      "get",
      KEY_ID,
      "application/x-www-form-urlencoded",
      null,
      false,
      endpoints.sealSMPort,
    )
      .then((response) => {
        // console.log("sealSErvices.js validateToken:: the response is ");
        // console.log(response);
        let sessionId = response.sessionData
          ? response.sessionData.sessionId
          : response.sessionId;
        resolve(sessionId);
      })
      .catch((err) => {
        console.log(err);
        if (counter < 2) {
          resolve(validateToken(msToken, counter + 1));
        } else {
          reject(err);
        }
      });
  });
};

export {
  getSealSessionData,
  startSealSession,
  updateSessionData,
  makeRedirectionToken,
  validateToken
};
