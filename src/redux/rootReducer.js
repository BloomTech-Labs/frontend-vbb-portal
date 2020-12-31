import { combineReducers } from 'redux';

import { loading } from './Loading.redux/Loading.reducer';
import { isError } from './IsError.redux/IsError.reducer';

/*
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({ loading, isError });

export default rootReducer;
