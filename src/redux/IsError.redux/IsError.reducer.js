const isErrorInitialState = {
  message: '',
  isError: false,
};

/**
 * Reducer for the IsError state of the App
 * Action :  {
 * type: 'SET_IS_ERROR', 'CLEAR_IS_ERROR'
 * payload: string Error message to be added to store
 * }
 */
export const isError = (state = isErrorInitialState, action) => {
  switch (action.type) {
    case 'SET_IS_ERROR':
      return { isError: true, message: action.payload ?? 'No error message returned' };
    case 'CLEAR_IS_ERROR':
      return initialState;
    default:
      return state;
  }
};
