import { SEARCH_FILTER } from './SearchBar.types';

export const searchFilter = (data) => {
  return {
    type: SEARCH_FILTER,
    payload: data,
  };
};
