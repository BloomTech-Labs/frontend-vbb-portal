export const SET_IS_ERROR = 'SET_IS_ERROR';
export const CLEAR_IS_ERROR = 'CLEAR_IS_ERROR';
/**
 * Action that sets isError to true and adds the text to the message
 * @param text: string that will be added to store
 */
export const setIsError = (text) => {
  return {
    type: SET_IS_ERROR,
    payload: text,
  };
};

/**
 * Action that sets isError to false and clears the error message
 */
export const clearIsError = () => {
  return { type: CLEAR_IS_ERROR };
};
