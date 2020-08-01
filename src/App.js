import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

import Layout from "./components/Layout";
import BaseRouter from "./Routes";

class App extends Component {
  componentDidMount() {
    console.log("try auto sign up");
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        <Router {...this.props}>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    isLoading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
