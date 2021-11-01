import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.signAndProceed = this.signAndProceed.bind(this);
    this.showDocument = this.showDocument.bind(this);
    this.state = {
      displayDocument: false,
    };
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    let companyIdentifier = req.legalPersonIdentifier
      ? req.legalPersonIdentifier
      : req.companyName;
    return {
      userDetails: req.userDetails,
      legalPersonIdentifier: req.legalPersonIdentifier,
      companyName: req.companyName,
      companyIdentifier: companyIdentifier,
    };
  }

  signAndProceed = () => {
    window.location.href = "/kyb/registry-prompt";
    // history.push("/kyb/registry-prompt");
  };

  showDocument =(e) => {
    console.log("showdocument")
    e.preventDefault();
    this.setState({
      displayDocument: true,
    });
  };

  render() {
    let documentDisplayDiv = !this.state.displayDocument ? (
      <div></div>
    ) : (
      <div id="document">
        <div className="row" style={{ marginBottom: "3rem" }}>
          Document:
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>I</span>
          <b>
            {this.props.userDetails.given_name}{" "}
            {this.props.userDetails.family_name}
          </b>
          <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>, born at:</span>{" "}
          <b>{this.props.userDetails.birthdate}</b>
          <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>
            identified by the eIDAS personal Identifier:
          </span>
          <b>{this.props.userDetails.personal_number}</b>
          <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>
            {" "}
            attest that I am affiliated with the company identified by the Legal
            Company Identifier or Legal Name:
          </span>
          <b>{this.props.companyIdentifier}</b>.
        </div>
      </div>
    );

    return (
      <div className="container" style={{ marginTop: "3rem" }}>
        {/* <ValidateTable userDetails={this.props.userDetails}></ValidateTable> */}
        <div className="row" style={{ marginBottom: "3rem" }}>
          Please validate your relationship with the declared company. To do so,
          click the Sign button. This will result in the signing a qualified One
          Time Signature (issued using your eIDAS eID profile) a document
          validating your relationship with the declared document. To review the
          document please click <a href="#" onClick={this.showDocument}>here</a>
        </div>
        {documentDisplayDiv}

        <div className="row" style={{ marginBottom: "3rem" }}>
          <button onClick={this.signAndProceed}>Sign</button>
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
