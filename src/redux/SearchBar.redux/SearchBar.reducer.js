import { SEARCH_FILTER, RECIEVE_FILTER } from './SearchBar.types';

const initialState = {
  value: '',
  results: {},
};

export const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        value: action.payload,
      };
    case RECIEVE_FILTER:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
