const isErrorInitialState = {
  message: '',
  isError: false,
};

/*
 * Sets the IsError state of the App
 * Action :  {
 * type: SET_IS_ERROR, 'CLEAR_IS_ERROR'
 * message: string
 * }
 */
export const isError = (state = isErrorInitialState, action) => {
  switch (action.type) {
    case 'SET_IS_ERROR':
      return { isError: true, message: action.message ?? 'No error message returned' };
    case 'CLEAR_IS_ERROR':
      return initialState;
    default:
      return state;
  }
};
