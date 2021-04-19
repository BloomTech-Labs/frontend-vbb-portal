import { LOG_OUT, SET_USER } from '../actions';

/**
 * User Types are:
 * STUDENT, MENTOR, TEACHER, DIRECTOR, ADVISOR, HEADMASTER
 */
const userInitialState = {
  userType: '',
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  externalId: '',
};

export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOG_OUT:
      return userInitialState;
    default:
      return state;
  }
};
