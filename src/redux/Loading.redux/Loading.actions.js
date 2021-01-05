/**
 * Sets the Loading state of the app to true
 */
export const setLoading = () => {
  return { type: 'SET_LOADING_TRUE' };
};

/**
 * Sets the Loading state of the app to false
 */
export const setFinishLoading = () => {
  return { type: 'SET_LOADING_FALSE' };
};
