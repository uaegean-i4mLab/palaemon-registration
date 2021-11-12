import { Table, Container, Row, Col, Button } from "react-bootstrap";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import { getPath } from "../utils/pathHelper";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/formStyle.js";

const useStyles = makeStyles(styles);

const QrPrompt = (props) => {
  let index = 0;
  // const permissions = props.permissions.map((permission) => {
  //   index++;
  //   return (
  //     <tr key={index}>
  //       <td>{index}</td>
  //       <td>{permission}</td>
  //     </tr>
  //   );
  // });

  let thePrompt;
  let topHeader;

  if (props.isVCOffer) {
    thePrompt =
      "Scan the QR code with your Jolocom Wallet to receive your Credential";
    topHeader = "Your protable KYB Credential is ready ";
  } else {
    thePrompt = "Scan the QR code with your Jolocom Wallet to proceed";
    topHeader = "Before we begin";
  }

  if (props.prompt) {
    thePrompt = props.prompt;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <h2
          class="MuiTypography-root MuiTypography-h3"
          style={{
            color: "#4d4d4d",
            padding: "8px 0px 0px",
            fontWeight: "normal",
          }}
        >
          {topHeader}
        </h2>
        <h1
          style={{
            margin: "0px 0px 48px 0px",
            marginTop: "0px",
            marginRight: "0px",
            marginBottom: "30px",
            marginLeft: "0px",
            fontSize: "2rem",
          }}
        >
          {thePrompt}
        </h1>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <img
          className="img-fluid"
          style={{
            display: "block",
            margin: "auto",
            maxHeight: "21rem",
          }}
          src={props.qrData}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
        <p
          className="MuiTypography-root  MuiTypography-body1"
          style={{ fontSize: "1.1429rem" }}
        >
          Do not have the Jolocom app yet? Download it form your prefered app
          store
        </p>
      </GridItem>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        ></GridItem>
        <GridItem xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
          <a
            href="https://apps.apple.com/us/app/jolocom-smartwallet/id1223869062"
            target="_blank"
            className="w-inline-block"
          >
            <img
              className="img-fluid"
              style={{ display: "block", margin: "auto" }}
              src={
                props.baseUrl
                  ? `${props.baseUrl}app-store.png`
                  : "/app-store.png"
              }
            />
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
          <a
            href="https://apps.apple.com/us/app/jolocom-smartwallet/id1223869062"
            target="_blank"
            className="w-inline-block"
          >
            <img
              className="img-fluid"
              style={{ display: "block", margin: "auto" }}
              src={
                props.baseUrl
                  ? `${props.baseUrl}app-store.png`
                  : "/app-store.png"
              }
            />
          </a>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "center" }}
        ></GridItem>
      </GridContainer>
    </GridContainer>
  );

   
};

export default QrPrompt;
