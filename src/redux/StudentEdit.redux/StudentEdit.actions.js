import { editUser as editApi } from '../../mock-data/mockApi';
import { STUDENT_EDIT_TYPES } from './StudentEdit.types';

export const editUser = (id, userData) => (dispatch) => {
  console.log('userData', userData);
  dispatch({ type: STUDENT_EDIT_TYPES.EDIT_USER_START });
  editApi(id, userData)
    .then((res) =>
      dispatch({ type: STUDENT_EDIT_TYPES.EDIT_USER_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: STUDENT_EDIT_TYPES.EDIT_USER_FAILURE, payload: err })
    );
};
