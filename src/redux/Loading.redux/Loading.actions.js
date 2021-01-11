export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
/**
 * Sets the Loading state of the app to true
 */
export const setLoading = () => {
  return { type: SET_LOADING_TRUE };
};

/**
 * Sets the Loading state of the app to false
 */
export const setLoadingFalse = () => {
  return { type: SET_LOADING_FALSE };
};
