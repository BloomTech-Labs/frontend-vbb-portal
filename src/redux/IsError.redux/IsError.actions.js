/**
 * Action that sets isError to true and adds the text to the message
 * @param text: string that will be added to store
 */
export const setIsError = (text) => {
  return {
    type: 'SET_IS_ERROR',
    payload: text,
  };
};

/**
 * Action that sets isError to false and clears the error message
 * @param text: string that will be added to store
 */
export const clearIsError = () => {
  return { type: 'CLEAR_IS_ERROR' };
};
