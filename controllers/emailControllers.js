import { sendInvitationEmail } from "../services/mailService";
import { getSessionData } from "../services/redis";

const sendEmailVCInvite = async (req, res, endpoint) => {
  let sessionId = req.body.sessionId;
  let link = req.body.issueLink;
  let recipient = await getSessionData(sessionId, "email");
  sendInvitationEmail(recipient, link);
  res.sendStatus(200);
};

export { sendEmailVCInvite };
