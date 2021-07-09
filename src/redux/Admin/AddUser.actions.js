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

//Since at the point of writing this code the backend endpoints are not yet ready, the post endpoint and the res and err responses are left empty. These will need to be added when the endpoint is available.
export const AddUser = (id, NewUser) =>{
return function (dispatch) {
  dispatch(AddUserRequest())
  axios
.post('', NewUser)
  .then(() => {
    dispatch(AddUserSuccess())
  })
  .catch(() => {
    setIsError('Not able to add new user')
  })
}}
