import React from "react";
import { connect } from "react-redux";
import VerifyUserComp from "components/updated/VerifyUserComp.js";
import { setUserDetails, setSessionId } from "../store.js";

class VerifyUserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketNumber: null,
      medical_condnitions: null,
      isNextEnabled: false,
      error: null,
    };
  }

  static async getInitialProps({ reduxStore, req }) {
    //returned value here is getting mered with the mapstatetoprops
    let sessionId = req.sessionId;
    if (typeof window === "undefined") {
      //store the userDetails to the store to be able to fetche form other views in the future
      if (req.userDetails) {
        reduxStore.dispatch(setUserDetails(req.userDetails));
        reduxStore.dispatch(setSessionId(req.sessionId));
      }
      // mapstatetoprops overrides these values if they match
      return {
        userDetails: req.userDetails,
      };
    } else {
      if (sessionId) {
        reduxStore.dispatch(setSessionId(sessionId));
      }
      return { sessionId: reduxStore.getState().sessionId };
    }
  }

  render() {
    return <VerifyUserComp userDetails={this.props.userDetails} sessionId={this.props.sessionId}/>;
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.userStoreDetails, //these were added to the redux store by verify-user.js
    sessionId: state.sessionId,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(VerifyUserView);
