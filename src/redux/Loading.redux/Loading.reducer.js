const loadingInitialState = false;

/*
 * Sets the loading state of the App
 *
 */
export const loading = (state = loadingInitialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return true;
    case 'SET_FINISH_LOADING':
      return false;
    default:
      return state;
  }
};
