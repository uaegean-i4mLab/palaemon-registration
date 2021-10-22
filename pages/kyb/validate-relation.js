import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import ValidateTable from "../../components/ValidateKYBComp";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      userDetails: req.userDetails,
      selfLei: req.selfLei,
    };
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "3rem" }}>
        {/* <ValidateTable userDetails={this.props.userDetails}></ValidateTable> */}
        <div className="row" style={{ marginBottom: "3rem" }}>
          Please validate your relationship with the declared company. To do so,
          click the Sign button. This will result in the signing a qualified One
          Time Signature (issued using your eIDAS eID profile) a document
          validating your relationship with the declared document. To review the
          document please click here
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          Document:
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          I 
          <b>
            {this.props.userDetails.given_name}{" "}
            {this.props.userDetails.family_name}
          </b>
          , born at: <b>{this.props.userDetails.birthdate}</b>
          identified by the eIDAS personal Identifier:{" "}
          <b>{this.props.userDetails.personal_number}</b>
          attest that I am affiliated the company identified by the LEI or Legal Name: <b>{this.props.selfLei}</b>.
        </div>

        <div className="row" style={{ marginBottom: "3rem" }}>
          <button>Sign</button>
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
