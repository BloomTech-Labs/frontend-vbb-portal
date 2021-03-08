import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import fullLogo from '../images/vbb-full-logo.png';
import miniLogo from '../images/vbb-picture-logo.png';

export const NavBar = ({ logout, authToken }) => {
  return (
    <nav
      className="navbar sticky-top  navbar-expand-lg navbar-light"
      id="vbb-full-bar"
    >
      <Link to="/" id="full-logo">
        <img
          src={fullLogo}
          alt="Logo"
          style={{ width: '200px', marginLeft: '30px' }}
        />
      </Link>
      <Link to="/" id="mini-logo">
        <img src={miniLogo} alt="Logo" style={{ width: '45px' }} />
      </Link>
      <Link to="/" id="bar-header-link">
        <h1 id="bar-header" style={{ marginBottom: '-25px' }}>
          Vbb Portal
          <span className="badge badge-secondary">NEW</span>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        {authToken ? (
          <div className="btn-pair">
            <Link
              className="btn btn-light donate-btn"
              type="button"
              to="/donate/"
              style={{ marginRight: '20px' }}
            >
              DONATE
            </Link>
            <Link
              className="btn btn-light signout-btn"
              type="button"
              to="/signin/"
              onClick={logout}
            >
              SIGN OUT
            </Link>
          </div>
        ) : (
          <div className="btn-pair">
            <Link
              className="btn btn-light signup-btn"
              type="button"
              to="/signup/"
              style={{ marginRight: '20px' }}
            >
              REGISTER
            </Link>
            <Link
              className="btn btn-light signin-btn"
              type="button"
              to="/signin/"
            >
              SIGN IN
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default withRouter(connect(mapStateToProps, actions)(NavBar));
