import axios from 'axios';
import { sleep } from '../../util/sleep';
import { clearIsError, PYTHON_API, setIsError } from '../actions';

export const SET_USER = 'SET_USER';

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

/**
 * With an auth token in state this retrieves the user from the API
 * @param {string}authToken authToken
 * @returns null or user response from the API
 */
export const getUserFromAuthToken = (authToken = null) => async (dispatch) => {
  // if no auth token raise error
  if (!authToken) {
    console.log('No auth token when getting user');
    dispatch(setIsError('No auth token when getting user'));
    sleep(3000);
    dispatch(clearIsError());
  }

  try {
    //get user from backend
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };
    const { data, status } = await axios.get(
      PYTHON_API + 'v1/auth/getcurrentuser/',
      headers
    );

    // if the response is not a 200
    if (status !== 200) {
      dispatch(setIsError('Error getting User from Auth token'));
      await sleep(3000);
      dispatch(clearIsError());
      return;
    }

    return data;
  } catch (err) {
    console.error('Error getting User from Auth token', { err });
  }
};
