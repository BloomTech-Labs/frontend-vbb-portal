
export const editUser = (id, { user_id, name }) => (dispatch) => {
  console.log('from PUT', { user_id, name });
  let user = { user_id, name };
  dispatch({ type: EDIT_USER_START });
  Axios()
    .put(`http://localhost:8000/mentees/${student.id}`, student)
    .then((res) => {
      console.log(res);
    });
  props.closeEditing();
};
