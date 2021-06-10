import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_CONTENT,
  CREATE_MODAL,
  SET_CONFIG,
} from './Modal.types';

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const setContent = (content) => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};

export const createModal = (content, config = {}) => {
  return {
    type: CREATE_MODAL,
    payload: { content, config },
  };
};

export const setConfig = (config) => {
  return {
    type: SET_CONFIG,
    payload: config,
  };
};
