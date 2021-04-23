import axios from 'axios';
import { PYTHON_API } from '../redux/actions';
/**
 * This gets the user from the API using the auth token.
 * NOTE Not an action creator
 * @param {string}authToken authToken
 * @returns data (user) response from api or raises an error
 */
export const getUserFromAuthToken = async (authToken = null) => {
  // if no auth token raise error
  if (!authToken) {
    return new Error('authToken required to login user');
  }
  //get user from backend
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
  const { data, status } = await axios.get(
    PYTHON_API + 'v1/auth/getcurrentuser',
    { headers }
  );
  // if the response is not a 200
  if (status !== 200) {
    //this is left vague so that we don't return any user info accidentally
    throw new Error('Error getting User from Auth token');
  }

  return data;
};
