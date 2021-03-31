import { SET_USER } from '../actions';

const userInitialState = {
  user: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    timeZone: '',
    initials: '',
    personalEmail: '',
    phone: '',
    city: '',
    notes: '',
  },
  charged: '',
  address: '',
  desiredInvolvement: '',
  affiliation: '',
  isAdult: false,
};

export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
