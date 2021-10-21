import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import  ValidateTable  from "../../components/ValidateKYBComp"

class Wizard extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      userDetails: req.userDetails,
    };
  }

  render() {
    return (
      <div className="container">
        <ValidateTable userDetails={this.props.userDetails}></ValidateTable>
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
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
