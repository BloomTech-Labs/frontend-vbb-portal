import Axios from 'axios';

export const EDIT_USER_START = "EDIT_USER_START"
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE"

    export const editUser = (id, {user_id, name}) => dispatch => {
        console.log("from PUT", {user_id, name})
        let user = { user_id, name };
        dispatch({ type: EDIT_USER_START })
        Axios()
        .put(`http://localhost:8000/mentees/${student.id}`, student)
        .then(res => {
        console.log(res);
      })
      props.closeEditing()
    }