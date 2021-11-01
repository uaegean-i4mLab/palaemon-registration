



const sendEmailVCInvite = async (req, res, endpoint) => {
    let sessionId = req.body.sessionId;
    // sessionId is provided by the caller
    let result = await makeRedirectionToken(sessionId, sender, receiver);
    return result;
  };



  export {sendEmailVCInvite, };
