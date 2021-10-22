import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import ValidateTable from "../../components/ValidateKYBComp";

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
      <div className="container">
        <form action="/start-login" method="post">
          <label className="row">
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
            
          </div>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(QueryView);
