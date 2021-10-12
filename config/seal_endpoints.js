const endpoints = () => {
  const SEAL_EIDAS_URI = process.env.SEAL_EIDAS_URI
    ? process.env.SEAL_EIDAS_URI
    : // : "vm.project-seal.eu";
      "vm.project-seal.grnet.gr";
  const SEAL_EIDAS_PORT = process.env.SEAL_EIDAS_PORT
    ? process.env.SEAL_EIDAS_PORT
    : "8443";
  const SEAL_EDUGAIN_URI = process.env.SEAL_EDUGAIN_URI
    ? process.env.SEAL_EDUGAIN_URI
    : // : "vm.project-seal.eu";
      "vm.project-seal.grnet.gr";
  const SEAL_EDUGAIN_PORT = process.env.SEAL_EDUGAIN_PORT
    ? process.env.SEAL_EDUGAIN_PORT
    : "10081";
  const SEAL_SM_URI = process.env.SEAL_SM_URI
    ? process.env.SEAL_SM_URI
    : //"vm.project-seal.eu";
      "vm.project-seal.grnet.gr";
  const SEAL_SM_PORT = process.env.SEAL_SM_PORT
    ? process.env.SEAL_SM_PORT
    : "9090";

  return {
    sealEidasUri: SEAL_EIDAS_URI,
    sealEidasPort: SEAL_EIDAS_PORT,
    sealEdugainUri: SEAL_EDUGAIN_URI,
    sealEdugainPort: SEAL_EDUGAIN_PORT,
    sealSMUri: SEAL_SM_URI,
    sealSMPort: SEAL_SM_PORT,
  };
};
//export the result of the function and not the funciton... i.e. just get the json here
exports.endpoints = endpoints();
