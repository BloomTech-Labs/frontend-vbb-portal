import { SEARCH_FILTER } from './SearchBar.types';
import { searchUsers } from '../../mock-data/mockApi';
import { searchFilter } from '../actions';
import Search from 'antd/lib/transfer/search';

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
      }).then((data) => (results = data));
    } else {
      searchUsers(parts[0], { limit: LIMIT }).then((data) => (results = data));
    }
  } else {
    results = {};
  }
};
