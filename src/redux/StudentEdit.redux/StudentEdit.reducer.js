import { STUDENT_EDIT_TYPES } from './StudentEdit.types';

const initialState = {
  pending: false,
  success: null,
  error: null,
};

export const editUser = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_EDIT_TYPES.EDIT_USER_START:
      return {
        pending: true,
        success: null,
        error: null,
      };
    case STUDENT_EDIT_TYPES.EDIT_USER_SUCCESS:
      return {
        pending: false,
        success: action.payload,
        error: null,
      };
    case STUDENT_EDIT_TYPES.EDIT_USER_FAILURE:
      return {
        pending: false,
        success: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
