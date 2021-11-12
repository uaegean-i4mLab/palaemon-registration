import React from "react";
import axios from "axios";
import {
  setSessionData,
  makeOnlyConnectionRequest,
  addSetToSelection,
  setStepperSteps,
  setEndpoint,
  setBaseUrl,
  setServerSessionId,
  completeDIDAuth,
  setEidasUriPort,
  setEidasRedirectUri,
  setSessionId,
} from "../../../store";
import { vcTypes } from "../../../config/vcTypes";
import Layout from "../../../components/Layout";
import { connect } from "react-redux";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import MyStepper from "../../../components/Stepper";
import HomeButton from "../../../components/HomeButton";
import IssueVCButton from "../../../components/IssueVCButton";
import PairOrCard from "../../../components/PairOrCard";
import ConnectMobile from "../../../components/ConnectMobile";
import isMobile from "../../../utils/isMobile";

class IssueKYB extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.isFetching = props.isFetching;
    this.sessionData = props.sessionData;
    this.hasRequiredAttributes =
      props.sessionData !== null &&
      props.sessionData !== undefined ;
  }

  static async getInitialProps({ reduxStore, req }) {
    let userSessionData;
    let DIDOk;
    let sessionId;
    if (typeof window === "undefined") {
      userSessionData = req.session.userData;
      reduxStore.dispatch(setEndpoint(req.session.endpoint));
      let baseUrl = req.session.baseUrl ? `/${req.session.baseUrl}/` : "";
      reduxStore.dispatch(setBaseUrl(baseUrl));
      reduxStore.dispatch(setServerSessionId(req.session.sessionId));
      reduxStore.dispatch(setSessionId(req.session.sessionId));
      DIDOk = req.session.DID;
      sessionId = req.session.sessionId;
    }

    //this way the userSessionData gets set in all settings
    if (userSessionData) {
      reduxStore.dispatch(setSessionData(userSessionData));
    }
    if (DIDOk) {
      reduxStore.dispatch(completeDIDAuth(sessionId));
    }
    if (sessionId) {
      reduxStore.dispatch(setSessionId(sessionId));
    }

    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      sessionData: userSessionData,
      qrData: reduxStore.getState().qrData,
      vcSent: false,
      sessionId: reduxStore.getState().sessionId,
    };
  }

  componentDidMount() {
    if (this.props.sessionData && this.props.sessionData.eidas) {
      //TODO clean this up
      let toSelect = [this.props.sessionData.eidas];
      this.props.setEidasToSelection(toSelect);
      ///
    }

    if (!this.props.DID) {
      //if DID auth has not been completed
      this.props.makeConnectionRequest(
        this.props.sessionId,
        this.props.baseUrl,
        "eidas",
        isMobile()
      );
    }
  }

  componentDidUpdate() {
    if (this.props.DID & !this.hasRequiredAttributes) {
      // //if DID auth is completed
      // // register the callbackUri to the SessionManager
      // let postUrl = this.props.baseUrl
      //   ? `${this.props.baseUrl}seal/update-session`
      //   : "/seal/update-session";
      // axios
      //   .post(postUrl, {
      //     sessionId: this.props.sealSession,
      //     variableName: "ClientCallbackAddr",
      //     variableValue: this.props.eidasRedirectUri,
      //   })
      //   .then((data) => {
      //     console.log("eidas.js:: session updated");
      //   });
    }
  }



  render() {
    let stepNumber = this.props.vcSent
      ? 2
      : !this.props.DID
      ? 0
      : this.hasRequiredAttributes
      ? 2
      : 1;
    let stepperSteps = [
      { title: "Pair your wallet" },
      { title: "Generate VC" },
      { title: "Accept Request on your Mobile Wallet" },
    ];

    if (this.props.qrData && isMobile() && !this.props.DID) {
      return (
        <div>
          <Row>
            <Col>
              <MyStepper steps={stepperSteps} activeNum={stepNumber} />
            </Col>
          </Row>
          <ConnectMobile
            baseUrl={this.props.baseUrl}
            qrData={this.props.qrData}
            DID={this.props.DID}
            uuid={this.props.uuid}
            serverSessionId={this.props.serverSessionId}
            sealSession={this.props.sessionId}
          />
        </div>
      );
    }

   
    let issueVCBut = (
      <IssueVCButton
        hasRequiredAttributes={this.hasRequiredAttributes}
        // vcIssuanceEndpoint={"/issueVCSecure"}
        baseUrl={this.props.baseUrl}
        // user attributes are not required as they are already in the backend
        // only the type of the VC should be provided here
        // vcAttributes={this.props.userSelection}
        uuid={this.props.sessionId}
        vcType={vcTypes.kyb}
      />
    );

    let promptCard = (
      <Card className="text-center" style={{ marginTop: "2rem" }}>
        <Card.Header>Generate a Portable  KYB Profile using Verifiable Credentials</Card.Header>
        <Card.Body>
          {/* <Card.Title>
            {this.hasRequiredAttributes
              ? `Click the following button to generate your KYB Profile Verifiable Credential. 
              Next, scan the generated QR code to receive the VC on your mobile wallet app. `
              : "Please authenticate to the required data sources"}
          </Card.Title> */}
          <Card.Text>
          Click the following button to generate your KYB Profile Verifiable Credential. 
              Next, scan the generated QR code to receive the VC on your mobile wallet app.
          </Card.Text>
          <Container>
            <Row>
              <Col>{issueVCBut}</Col>
            </Row>
          </Container>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    );

    let result = (
      <PairOrCard
        qrData={this.props.qrData}
        DID={this.props.DID}
        baseUrl={this.props.baseUrl}
        uuid={this.props.uuid}
        serverSessionId={this.props.serverSessionId}
        card={promptCard}
        vcSent={this.props.vcSent}
        sealSession={this.props.sessionId}
        credQROffer={this.props.credQROffer}
      />
    );

    return (
      <div className="container">
        <Row>
          <Col>
            <MyStepper steps={stepperSteps} activeNum={stepNumber} />
          </Col>
        </Row>
        {result}

       
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.fetching,
    qrData: state.qrData,
    sessionData: state.sessionData,
    userSelection: state.userSelection, // the attributes selected by the user to be included in a VC,
    baseUrl: state.baseUrl,
    DID: state.DID,
    serverSessionId: state.serverSessionId,
    uuid: state.uuid,
    vcSent: state.vcSent,
    sessionId: state.sessionId,
    eidasUri: state.eidasUri,
    eidasPort: state.eidasPort,
    endpoint: state.endpoint,
    eidasRedirectUri: state.eidasRedirectUri,
    credQROffer: state.credQROffer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEidasToSelection: (set) => {
      dispatch(addSetToSelection(set));
    },
    setSteps: (steps) => {
      dispatch(setStepperSteps(steps));
    },
    setEndPoint: (endpont) => {
      dispatch(setEndpoint(endpoint));
    },
    makeConnectionRequest: (sessionId, baseUrl, vcType, isMobile) => {
      dispatch(
        makeOnlyConnectionRequest(sessionId, baseUrl, vcType, isMobile)
      );
    },
    didAuthOK: (uuid) => {
      dispatch(completeDIDAuth(uuid));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueKYB);
