import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../style.css';
import * as actions from '../redux/actions';
import Layout from './Layout';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    // this.props.authCheckState();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter {...this.props}>
          <Layout {...this.props}>
            <Routes />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.token !== null,
    // isLoading: state.loading,
    // error: state.isError.isError,
    // message: state.isError.message,
  };
};

export default connect(mapStateToProps, actions)(App);
