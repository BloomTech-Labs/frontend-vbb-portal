import React from 'react';
import axios from 'axios';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import MentorProfile from "./MentorProfile";

class Student extends React.Component {
  state = {
    sessionSlots: [],
  };

  render() {
    return (
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default withRouter(connect(mapStateToProps, actions)(Student));
