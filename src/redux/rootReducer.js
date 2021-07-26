import { combineReducers } from 'redux';

import { user } from './User.redux/User.reducer';
import { loading } from './Loading.redux/Loading.reducer';
import { isError } from './IsError.redux/IsError.reducer';
import { authToken } from './AuthToken.redux/AuthToken.reducer';
import { sessionSlot } from './SessionSlot.redux/SessionSlot.reducer';
import { registrationForm } from './Registration.redux/RegistrationForm.reducer';
import { modal } from './Modal.redux/Modal.reducer';
import { editUser } from './StudentEdit.redux/StudentEdit.reducer';
import { searchBarReducer } from './SearchBar.redux/SearchBar.reducer';
import menteeRegistration from './MenteeRegistration.redux/MenteeRegistration.reducer';
import { getUsersReducer } from './Admin/GetUsers.reducer';

/**
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({
  loading,
  isError,
  authToken,
  sessionSlot,
  user,
  getUsersReducer,
  registrationForm,
  modal,
  editUser,
  searchBarReducer,
  menteeRegistration,
});

export default rootReducer;
