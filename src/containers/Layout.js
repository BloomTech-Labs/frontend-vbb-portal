import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import NavBar from '../components/NavBar';
import AlertDismissable from '../components/AlertDismissable';
import Routes from './Routes';
import Footer from '../components/Footer';

const Layout = ({ logout }) => {
  return (
    <div id="page-container">
      <NavBar />
      <div className="content">
        <AlertDismissable close={logout} />
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, actions)(Layout));
