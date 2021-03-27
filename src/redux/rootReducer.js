import { combineReducers } from 'redux';

import { user } from './User.redux/User.reducer';
import { loading } from './Loading.redux/Loading.reducer';
import { isError } from './IsError.redux/IsError.reducer';
import { authToken } from './AuthToken.redux/AuthToken.reducer';
import { sessionSlot } from './SessionSlot.redux/SessionSlot.reducer';

/**
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({
  loading,
  isError,
  authToken,
  sessionSlot,
  user
});

export default rootReducer;
