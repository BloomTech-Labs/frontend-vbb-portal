import { createUser } from '../../mock-data/mockApi';
import { refreshSearch } from '../actions';

export const POST_FORM_DATA = 'POST_FORM_DATA';
export const POST_FORM_DATA_SUCCESS = 'POST_FORM_DATA_SUCCESS';
export const POST_FORM_DATA_FAIL = 'POST_FORM_DATA_FAIL';

export function postFormData() {
  return {
    type: POST_FORM_DATA,
  };
}
export function postFormSuccess(successMessage) {
  return {
    type: POST_FORM_DATA_SUCCESS,
    payload: successMessage,
  };
}

export function postFormFail(errorMessage) {
  return {
    type: POST_FORM_DATA_FAIL,
    payload: errorMessage,
  };
}

export const registerMentee = (menteeData) => (dispatch) => {
  dispatch(postFormData());
  createUser(menteeData)
    .then((res) => {
      dispatch(postFormSuccess(res));
      dispatch(refreshSearch());
    })
    .catch((err) => {
      dispatch(postFormFail(err));
    });
};
