import {
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from './StudentEdit.types';

export const editUser = (action) => {
  switch (action.type) {
    case EDIT_USER_START:
      return {
        ...state,
        editing: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editing: false,
        editingUser: action.payload,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        editing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
