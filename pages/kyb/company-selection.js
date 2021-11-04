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
import Form6 from "../../components/Forms/Form6";
import Head from "next/head";

class QueryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: null,
      companyCountry: null,
      LEI: null,
      isNextEnabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.stringNotEmpty = this.stringNotEmpty.bind(this);
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    // mapstatetoprops overrides these values if they match
    return {
      userDetails: req.userDetails,
    };
  }

  async handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + " " + value);
    // setInputs(values => ({...values, [name]: value}))
    await this.setState({
      [name]: value,
    });
    if (
      this.stringNotEmpty(this.state.lei) ||
      (this.stringNotEmpty(this.state.companyCountry) &&
        this.stringNotEmpty(this.state.companyName))
    ) {
      this.setState({
        isNextEnabled: true,
      });
    } else {
      this.setState({
        isNextEnabled: false,
      });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`clicked submit`);
  };

  stringNotEmpty(s) {
    if (s) {
      let result = s.length > 0;
      console.log(`not empty ${s}:: ${result}`);

      return result;
    }
    return false;
  }

  render() {
    return (
        <LayoutNew home>
          <Head>
            <title>Grids</title>
          </Head>
          <form action="/start-login" method="post">
            <Form6 handleChange={this.handleChange}/>
          </form>
          {/*<label className="row">
            Company Name:
            <input
              type="text"
              name="companyName"
              onChange={this.handleChange}
            />
          </label>
          <label className="row">
            Company Country:
            <input
              type="text"
              name="companyCountry"
              onChange={this.handleChange}
            />
          </label>
          <label className="row">
            LEI:
            <input type="text" name="lei" onChange={this.handleChange} />
          </label>
          <div className="row">
            <input type="submit" disabled={!this.state.isNextEnabled} />

          </div>*/}
        </LayoutNew>
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
export default connect(mapStateToProps, mapDispatchToProps)(QueryView);
