import QrPrompt from "./QrPrompt";
import SSE from "./Sse.js";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import IssueVCButton from "./IssueVCButton";

const ProceedIssuePrompt = (props) => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <h2
          class="MuiTypography-root MuiTypography-h3"
          style={{
            color: "#4d4d4d",
            padding: "8px 0px 0px",
            fontWeight: "normal",
          }}
        >
          Jolocom Wallet connected succesfully
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
          Proceed to Issue your Portable KYB Credential
        </h1>
      </GridItem>
      <GridItem xs={12} sm={12} md={8} style={{ textAlign: "center" }}>
        <p
          className="MuiTypography-root  MuiTypography-body1"
          style={{ fontSize: "1.1429rem", textAlign: "left" }}
        >
          Click the following button to generate your KYB Profile Verifiable
          Credential. Next, scan the generated QR code to receive the VC on your
          mobile wallet app.
        </p>
      </GridItem>
      <GridItem xs={12} sm={12} md={8} style={{ textAlign: "center" }}>
        <IssueVCButton
          hasRequiredAttributes={props.hasRequiredAttributes}
          baseUrl={props.baseUrl}
          uuid={props.uuid}
          vcType={props.vcType}
        />
      </GridItem>
    </GridContainer>
  );
};

export default ProceedIssuePrompt;
