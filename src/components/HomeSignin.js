import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import * as actions from '../redux/actions';
import vbbInAction from '../images/vbb-in-action.png';

// this needs  to hold the goolge sign in button
// registration button should be a link to registration route from react-router-dom
// this should all be moved to actions
const responseGoogle = (response) => {
  console.log('failure response', response);
  alert(
    'Google authorization failed. Please Make sure Cookies are enabled on your browser! ... ',
    response
  );
};
//   // responseGoogle = (response) => {
//   //   console.log('failure response', response);
//   //   alert(
//   //     'Google authorization failed. Please Make sure Cookies are enabled on your browser! ... ',
//   //     response
//   //   );
//   // };
const validateGoogle = (response, history, onGauth) => {
  onGauth(response.accessToken);
  history.push('/');
};

/**
 * HomeSignin.
 * Connected functional component
 * Displays Google Signin button and Register button
 *
 * @param { Type History } history from react router dom
 * @param {onGauth} current action from login import as a connected component
 */
const HomeSignin = ({ history, onGauth }) => {
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
            onSuccess={(res) => validateGoogle(res, history, onGauth)}
            onFailure={(res) => responseGoogle(res)}
            cookiePolicy={'single_host_origin'}
            style={{ width: '100%', paddingTop: '30px' }}
          />
        </div>
        <br />
        <hr id="sep-bar" />
        <br />
        <div id="create-account-box">
          <p
            style={{
              paddingLeft: '0px',
              fontSize: '20px',
              color: '#ff914d',
              fontWeight: 'bolder',
            }}
          >
            Don't have an account with us yet?
          </p>
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

// need to sort out google auth
// this should make a call to goolge
// get token back
// send token to backend
// receive cookie auth jwt that's stored and send as part of a header

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGauth: (googleToken) => dispatch(actions.gAuth(googleToken)),
//   };
// };

export default connect(mapStateToProps, actions)(HomeSignin);
