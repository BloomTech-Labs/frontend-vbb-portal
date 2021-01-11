import { LOG_OUT, SET_AUTH_TOKEN } from '../actions';

const authTokenInitialState = '';

export const authToken = (state = authTokenInitialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
