import { addDataToDb } from "../repository/kybRepo";
import { getSessionData } from "../services/redis";

const addToRegistry = async (req, res) => {
  let sessionId = req.body.sessionId;
  let userDetails = await getSessionData(sessionId, "userDetails");

  addDataToDb(userDetails)
    .then((resp) => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export { addToRegistry };
