const loadingInitialState = false;

/*
 * Sets the loading state of the App
 *
 * Action :  {
 * type: 'SET_LOADING_TRUE', 'SET_LOADING_FALSE'
 * }
 */
export const loading = (state = loadingInitialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_TRUE':
      return true;
    case 'SET_LOADING_FALSE':
      return false;
    default:
      return state;
  }
};
