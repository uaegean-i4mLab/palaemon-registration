import React from "react";
import axios from "axios";
import LayoutNew from "../../components/LayoutNew";
import { connect } from "react-redux";
import ValidateTable from "../../components/ValidateKYBComp";
import Form1 from "../../components/Forms/Form1";
import Form2 from "../../components/Forms/Form2";
import Form3 from "../../components/Forms/Form3";
import Form4 from "../../components/Forms/Form4";
import Form5 from "../../components/Forms/Form5";
import Form6 from "../../components/Forms/CompanySelectionForm";
import Head from "next/head";

class KompanyProceed extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ reduxStore, req }) {
    console.log(req.userDetails)
    return {
      userDetails: req.userDetails,
      redirect_uri: req.redirectURI
    };
  }

  componentDidMount() {
    const formElementKey1Exists = document.getElementById("redirectForm");
    console.log("updated!")
    if (formElementKey1Exists ) {
      console.log("hey! redeirecting to " + this.props.redirect_uri)
        document.getElementById('redirectForm').submit();
    }
}

  render() {
    return (
       <form id="redirectForm" action={this.props.redirect_uri} method="post" style={{display:"none"}}>
         <input type="text" name="details" value={JSON.stringify(this.props.userDetails)} readOnly></input>
         <input type="submit"></input>
       </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(KompanyProceed);
