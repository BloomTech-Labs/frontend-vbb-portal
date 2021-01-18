import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import * as actions from '../redux/actions';
import vbbInAction from '../images/vbb-in-action.png';

/**
 * local inline style
 */
const paragraphStyle = {
  paddingLeft: '0px',
  fontSize: '20px',
  color: '#ff914d',
  fontWeight: 'bolder',
};

/**
 * HomeSignin.
 * Connected functional component
 * Displays Google Signin button and Register button
 *
 * @param { Type History } history from react router dom
 * @param {redux action} logIn current action from login import as a connected component
 * @param {redux action} manageFailedGoogleLogin current action from login import as a connected component
 */
const HomeSignin = ({ history, logIn, manageFailedGoogleLogin }) => {
  return (
    <div className="twocol-container">
      <div className="column" id="signin-box">
        <h1 id="welcome-header">Welcome to VBB Portal!</h1>
        <h4 id="portal-purpose">
          Let's give hope to children through mentoring.
        </h4>
        <br />
        <div id="google-box">
          <GoogleLogin
            clientId="711431548719-lpoc2lbr4bmruqo7d9emua5huvpsvqgk.apps.googleusercontent.com"
            buttonText="Click here to sign in!"
            onSuccess={(res) => logIn(res.accessToken, history)}
            onFailure={(res) => manageFailedGoogleLogin()}
            cookiePolicy={'single_host_origin'}
            style={{ width: '100%', paddingTop: '30px' }}
          />
        </div>
        <br />
        <hr id="sep-bar" />
        <br />
        <div id="create-account-box">
          <p style={paragraphStyle}>Don't have an account with us yet?</p>
          <Link to="/signup/" className="btn btn-light signup-btn">
            REGISTER
          </Link>
        </div>
      </div>
      <img
        src={vbbInAction}
        id="signin-picture"
        alt="Two mentors reading to two mentees on the steps of a Village Book Builders' library"
        style={{ width: '600px', margin: '5vw' }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, actions)(HomeSignin);
