import axios from 'axios';
import { setIsError } from '../actions';

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GetUsersStart = () => {
    return { type: GET_USERS_START }
};

export const GetUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
};

export const GetUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
};

