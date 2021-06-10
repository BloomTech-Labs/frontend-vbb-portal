import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_CONTENT,
  CREATE_MODAL,
  SET_CONFIG,
} from './Modal.types';

const initialState = {
  isOpen: false,
  content: null,
  config: {},
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MODAL:
      return {
        ...state,
        isOpen: true,
        content: action.payload.content,
        config: action.payload.config,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
