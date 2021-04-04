import { LOG_OUT, SET_REGISTRATION_FORM } from '../actions';

const registrationFormInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subToNewsLetter: true,
};

export const registrationForm = (
  state = registrationFormInitialState,
  action
) => {
  switch (action.type) {
    case SET_REGISTRATION_FORM:
      return action.payload;
    case LOG_OUT:
      return registrationFormInitialState;
    default:
      return state;
  }
};
