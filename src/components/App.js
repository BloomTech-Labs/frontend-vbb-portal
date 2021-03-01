import React from 'react';
import { connect } from 'react-redux';
import '../style.css';
import * as actions from '../redux/actions';
import Layout from './Layout';
import Routes from './Routes';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.token !== null,
    // isLoading: state.loading,
    // error: state.isError.isError,
    // message: state.isError.message,
  };
};

export default connect(mapStateToProps, actions)(App);
