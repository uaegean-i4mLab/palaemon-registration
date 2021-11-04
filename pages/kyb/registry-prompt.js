import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import ValidateTable from "../../components/ValidateKYBComp";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.addUserToRegistry = this.addUserToRegistry.bind(this);
    this.proceedToKeycloak = this.proceedToKeycloak.bind(this);
    this.state = {
      addedToRegistry: false,
    };
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      userDetails: req.userDetails,
      selfLei: req.selfLei,
      sessionId: req.sessionId,
      keycloakUrl: req.keycloakRedirectURI,
    };
  }

  addUserToRegistry() {
    let sessionId = this.props.sessionId;
    const reqObj = { sessionId: sessionId };
    axios.post("/registry/add", reqObj).then((response) => {
      // console.log(response);
      this.setState({
        addedToRegistry: true,
      });
    }).then( () =>{
      axios.post("/email/send", {sessionId: sessionId, issueLink:"thisisalink"}).then((response) => {
        // console.log(response);
        console.log("email sent ok")
    })});
    //TODO add here the send email callback
  }

  proceedToKeycloak() {
    console.log("proceed to keycloak");
    window.location.href = this.props.keycloakUrl;
  }

  render() {
    let addToRegistryDiv = !this.state.addedToRegistry ? (
      <div className="row" style={{ marginBottom: "3 rem" }}>
        <button onClick={this.addUserToRegistry}>Register</button>
      </div>
    ) : (
      <div style={{ margin: "3 rem 3 rem 3 rem 3 rem" }}>
        Thank you for registering
      </div>
    );

    return (
      <div className="container" style={{ marginTop: "3rem" }}>
        {/* <ValidateTable userDetails={this.props.userDetails}></ValidateTable> */}
        <div className="row" style={{ marginBottom: "3rem" }}>
          Please review the attributes retrieved, presented below. If you are
          certain that these attributes correctly identify you please click the
          Next button. Additionally, if you would like you can  add your Company’s KYB
          profile in the public registry in an easily Verifiable Format? If you
          opt in for this feature the public profile of your organization will
          be easily verified by anyone (public authorities, B2B transactions
          etc.) greatly facilitating your dealings with these parties. If Yes,
          please click the “Register” button
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          Details:
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          <ValidateTable userDetails={this.props.userDetails}></ValidateTable>
        </div>

        {addToRegistryDiv}

        <div className="row" style={{ marginBottom: "3rem" }}>
          <button onClick={this.proceedToKeycloak}>Finish</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: "Test",
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
