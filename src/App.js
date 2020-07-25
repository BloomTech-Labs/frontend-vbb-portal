import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

import Layout from "./components/Layout";
import BaseRouter from "./routes";
import "./Style.css";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        <Router>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
