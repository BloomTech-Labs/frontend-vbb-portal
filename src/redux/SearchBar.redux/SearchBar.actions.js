import { SEARCH_FILTER, RECIEVE_FILTER } from './SearchBar.types';
import { searchUsers } from '../../mock-data/mockApi';

export const searchFilter = (value) => {
  return {
    type: SEARCH_FILTER,
    payload: value,
  };
};

export const recieveFilter = (results) => {
  return {
    type: RECIEVE_FILTER,
    payload: results,
  };
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

export const refreshSearch = () => (dispatch, getState) => {
  dispatch(searchFilterFunction(getState().searchBarReducer.value));
};
