import axios from 'axios';
import { getUserFromAuthToken } from '../../util/getUserWithAuthToken';
import { sleep } from '../../util/sleep';
import {
  PYTHON_API,
  setLoading,
  setLoadingFalse,
  setIsError,
  clearIsError,
  setAuthToken,
  setUser,
} from '../actions';

/**
 * This handles all actions associated with logging in
 *
 */

// @TODO delete after backend endpoint is live
// to use replace the call with the const resposne = fakeResponseForTesting
// const fakeResponseForTesting = {
//   status: 200,
//   jwt_refresh_token: 'FAKE_JWT_REFRESH_TOKEN',
// };

/**
 * Manages failed google Login
 * Sets an error state, sleeps for 2000ms and then clears error state
 */
export const manageFailedGoogleLogin = async (res) => {
  console.log('Error response from failed google login', res);
  setIsError('Google login has failed. Please try again');
  await sleep(2000);
  clearIsError();
};

/**
 * logIn.
 * Handles log in for the app. Calls google as part of the loging action
 * Tokens received from the backend will expire in 10 minutes
 * @param {string} googleToken: string from the successful response from google
 * @param {history function} history: function from react-router-dom
 */
export const logIn = (googleToken, history) => async (dispatch) => {
  dispatch(setLoading());
  try {
    //send google token to the backend
    // previous endpoint   'http://127.0.0.1:8000/api/googlelogin/',
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post(
      PYTHON_API + 'v1/auth/login/',
      {
        google_access_token: googleToken,
      },
      headers
    );
    console.log('backendRes', response);

    // @TODO remove once we have a functional backend repo
    // const response = fakeResponseForTesting;

    const statusCode = response.status;

    dispatch(setLoadingFalse());

    //call was successful
    if (statusCode === 200) {
      console.log('Successful login');
      const jwtRefreshToken = response.jwt_refresh_token;

      //@TODO set timer to refresh token

      //save token on front
      dispatch(setAuthToken(jwtRefreshToken));

      //push user to dashboard
      history.push('/');
    } else {
      console.log('Failed login');
      dispatch(setIsError('Google login has failed. Please try again'));
      await sleep(2000);
      dispatch(clearIsError());
    }
  } catch (err) {
    console.log('Login Catch block failed login');
    console.log('Backend Login Error: ', err);
    dispatch(setLoadingFalse());
    dispatch(setIsError(err.message ?? 'Connection to the API failed'));
    await sleep(2000);
    dispatch(clearIsError());
  }
};

/**
 * Responsible for logging in the user given an email and a password
 * Will attempt a call to the API and set the user in store
 * @param {string} email user's email address
 * @param {string} password user's plain text password
 * @returns
 */
export const logInEmailPassword = () => async (dispatch, getState) => {
  const email = getState().registrationForm?.email;
  const password = getState().registrationForm?.password;

  if (!email || !password) {
    console.log('Can not log in user. Missing email or password');
    return;
  }

  try {
    const token = await getTokenFromEmailPassword(email, password);
    const user = await getUserFromAuthToken(token);
    dispatch(setUser(transformUser(user)));
    return;
  } catch (err) {
    console.error('Error logging in user');
    setIsError('Error logging in User');
    await sleep(3000);
    clearIsError();
    return;
  }
};

const getTokenFromEmailPassword = async (email, password) => {
  // get token from the backend
  const body = {
    email,
    password,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const { data, status } = await axios.post(
      PYTHON_API + 'v1/auth/login/',
      body,
      headers
    );
    if (status !== 201) {
      return new Error('Error logging in user');
    }
    return data;
  } catch (err) {
    console.error('Error logging in user');
    return new Error('Error logging in user');
  }
};

const transformUser = (userAPI) => {
  const { id, user_type, first_name, last_name, email, external_id } = userAPI;
  return {
    id: id,
    userType: user_type,
    firstName: first_name,
    lastName: last_name,
    email: email,
    externalId: external_id,
  };
};
