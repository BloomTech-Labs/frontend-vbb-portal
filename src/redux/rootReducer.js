import { combineReducers } from 'redux';

import { loading } from './Loading.redux/Loading.reducer';
import { isError } from './IsError.redux/IsError.reducer';
import { authToken } from './AuthToken.redux/AutToken.reducer';
/**
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({ loading, isError, authToken });

export default rootReducer;
