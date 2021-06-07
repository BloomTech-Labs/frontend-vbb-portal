import { LOG_OUT, SET_USER } from '../actions';

/**
 * User Types are:
 * STUDENT, MENTOR, TEACHER, DIRECTOR, ADVISOR, HEADMASTER
 */
const userInitialState = {
  userType: '',
  first_name: '',
  last_name: '',
  personal_email: '',
  city: '',
  date_of_birth: '',
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
