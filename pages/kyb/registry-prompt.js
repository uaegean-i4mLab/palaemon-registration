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
          Would you like to add your KYB profile in the services public registry
          in an easily Verifiable Format? If you opt in for this feature the
          public profile of your organization will be easily verified by anyone
          (public authorities, B2B transactions etc.) greatly facilitating your
          dealings with these parties. If Yes, please click the “Register”
          button, else click the “Next” button to send your KYB attributes to
          the service that originated this flow
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          Details:
        </div>
        <div className="row" style={{ marginBottom: "3rem" }}>
          <ValidateTable userDetails={this.props.userDetails}></ValidateTable>
        </div>

        <div className="row" style={{ marginBottom: "3rem" }}>
          <button>Register</button>
        </div>

        <div className="row" style={{ marginBottom: "3rem" }}>
          <button>Finish</button>
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
