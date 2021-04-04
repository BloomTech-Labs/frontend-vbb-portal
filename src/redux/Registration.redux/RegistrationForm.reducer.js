import { LOG_OUT, SET_REGISTRATION_FORM } from '../actions';

const registrationFormInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subToNewsLetter: true,
  is_adult: false,
  timeZone: '',
  address: '', // Washington, DC
  desiredInvolvement: '',
  affiliation: '',
  additionalInformation: {
    workStatus: '',
    referralSource: '',
    language: {
      english: false,
      spanish: false,
      french: false,
      german: false,
    },
    convicted: false,
    moreThanFourMonths: false,
    initials: '',
    getMoreInvolved: false,
    howMoreInvolved: [],
    agreeTermsAndConditions: false,
  },
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
