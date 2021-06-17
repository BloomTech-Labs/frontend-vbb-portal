import { SEARCH_FILTER, RECIEVE_FILTER } from './SearchBar.types';
import { searchUsers } from '../../mock-data/mockApi';
import { searchFilter, recieveFilter } from '../actions';

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

const LIMIT = 50;
export const searchFilterFunction = (value) => (dispatch) => {
  dispatch(searchFilter(value));
  if (value.length) {
    const parts = value.split(':').map((e) => e.trim());
    if (parts.length > 1) {
      searchUsers(parts[1], {
        userTypes: [parts[0]],
        limit: LIMIT,
      }).then((data) => dispatch(recieveFilter(data)));
    } else {
      searchUsers(parts[0], { limit: LIMIT }).then((data) =>
        dispatch(recieveFilter(data))
      );
    }
  } else {
    dispatch(recieveFilter({}));
  }
};
