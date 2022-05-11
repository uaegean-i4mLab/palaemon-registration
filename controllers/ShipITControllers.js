import { getTicketData, getCrewMemberDetails } from "../services/ShipITService";

const fetchTicketDetails = async (req, res) => {
  let ticktetNumber = req.body.ticktetNumber;
  let sessionId = req.body.sessionId;
  let userDetails = await getTicketData(ticktetNumber);

  if (userDetails.code === 404) {
    res.status(404).send(userDetails);
  } else {
    res.status(200).send(userDetails);
  }
};

const fetchCrewDetails = async (req, res) => {
  
  // console.log("2")
  // console.log(req.body)
  // console.log("3")
  let name = req.body.name
  let surname = req.body.surname
  let identifier = req.body.identifier
  
  let userDetails = await getCrewMemberDetails(
    name,
    surname,
    identifier
  );

  // console.log(userDetails);
  if (userDetails.code === 404) {
    res.status(404).send(userDetails);
  } else {
    res.status(200).send(userDetails);
  }
};

export { fetchTicketDetails, fetchCrewDetails };
