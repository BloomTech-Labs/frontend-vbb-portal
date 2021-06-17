import {
  POST_FORM_DATA,
  POST_FORM_DATA_SUCCESS,
  POST_FORM_DATA_FAIL,
} from '../actions';

const initialState = {
  menteeFormData: [],
  isPosting: false,
  error: '',
};

const menteeRegistrationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case POST_FORM_DATA:
      return {
        ...state,
        isPosting: true,
        menteeFormData: [...state.menteeFormData, actions.payload],
      };
    case POST_FORM_DATA_SUCCESS:
      return {
        ...state,
        isPosting: false,
        menteeFormData: actions.payload,
      };
    case POST_FORM_DATA_FAIL:
      return {
        ...state,
        isPosting: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default menteeRegistrationReducer;
