import axios from "axios";
import { PYTHON_API } from '../actions';

export const initialUserRegistration = () => async (dispatch, getState) => {
    try {
        axios.post(PYTHON_API + 'v1/mentor/')
    } catch (err) {
        console.error('initial user registration error', err)
    }
};