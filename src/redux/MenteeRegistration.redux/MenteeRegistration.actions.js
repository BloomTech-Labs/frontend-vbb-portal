export const POST_FORM_DATA = 'POST_FORM_DATA';
export const POST_FORM_DATA_SUCCESS = 'POST_FORM_DATA_SUCESS';
export const POST_FORM_DATA_FAIL = 'POST_FORM_DATA_FAIL';

export function postFormData(formData) {
  return {
    type: POST_FORM_DATA,
    payload: formData,
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
