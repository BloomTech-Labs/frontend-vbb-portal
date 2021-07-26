import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./GetUsers.actions";
import moment from 'moment';

const data = [
    {
      key: '1',
      first_name: 'John',
      last_name: 'Brown',
      phone: '123-456-7890',
      email: 'test1@test.com',
      dob: moment('01/01/2000','MM/DD/YYYY'),
      role: 'Mentor'
    },
    {
      key: '2',
      first_name: 'Jim',
      last_name: 'Green',
      phone: '888-523-8850',
      email: 'test2@test.com',
      dob: moment('12/22/2011'),
      role: 'Mentee'
    },
    {
      key: '3',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010'),
      role: 'Admin'
    },
    {
      key: '4',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010'),
      role: 'Admin'
    },
    {
      key: '5',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010'),
      role: 'Admin'
    },
];

const initialState = {
    loading: false,
    users: data,
    error: ''
};

export const getUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_START:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}