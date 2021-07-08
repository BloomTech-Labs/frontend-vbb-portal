import axios from 'axios'
import {setIsError} from '.././actions'

export const ADD_USER_REQUEST = "ADD_USER_REQUEST"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILURE = "ADD_USER_FAILURE"

export const AddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST
  }
}

export const AddUserSuccess = (NewUser) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: NewUser
   
  }
}

export const AddUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error
  }
}


export const AddUser = (id, NewUser) =>{
return function (dispatch) {
  dispatch(AddUserRequest())
  axios
.post(``, NewUser)
  .then((res) => {
    dispatch(AddUserSuccess())
  })
  .catch(err => {
    setIsError('Not able to add new user')
  })
}}
