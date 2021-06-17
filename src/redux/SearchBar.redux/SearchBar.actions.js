import { SEARCH_FILTER, RECIEVE_FILTER } from './SearchBar.types';

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
