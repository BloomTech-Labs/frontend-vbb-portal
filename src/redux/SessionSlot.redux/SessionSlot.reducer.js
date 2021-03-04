import { LOG_OUT, SET_SESSION_INFO, SET_SESSION_END_DATE } from '../actions';

const sessionSlotInitialState = {
  id: '',
  display: '',
  endDate: '',
  mentorNotes: '',
  unbookConfirmation: false,
  readyToApplyChanges: false,
  didCommunicate: '',
  proceedToUnbook: '',
};

/**
 * sessionSlot.
 * This holds the current sessionSlot and it's details
 *
 * @param {sessionSlotInitialState} state
 * @param {LOG_OUT} action
 */
export const sessionSlot = (state = sessionSlotInitialState, action) => {
  switch (action.type) {
    case SET_SESSION_INFO:
      return action.payload;
    case SET_SESSION_END_DATE:
      return { ...state, endDate: action.payload };
    case LOG_OUT:
      return sessionSlotInitialState;
    default:
      return state;
  }
};
// likely initialState
// state = {
//   id: '',
//   display: '',
//   endDate: '',
//   mentorNotes: '',
//   unbookConfirmation: false,
//   readyToApplyChanges: false,
//   didCommunicate: '',
//   proceedToUnbook: '',
// };
