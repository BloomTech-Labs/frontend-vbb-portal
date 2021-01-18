/**
 * base level export for all actions in the application
 */

//@TODO temporary, this should be an ENV var
export const BASE_URL = 'http://127.0.0.1:8000';

export * from '../Loading.redux/Loading.actions';
export * from '../IsError.redux/IsError.actions';
export * from '../Login.redux/Login.actions';
export * from '../LogOut.redux/LogOut.actions';
export * from '../AuthToken.redux/AuthToken.actions';
