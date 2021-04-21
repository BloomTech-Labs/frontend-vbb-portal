import React from 'react';
import { AutoComplete } from 'antd';
import dummy from './MOCK_DATA.json';

const options = dummy.map((user) => ({
  value: `${user.first_name} ${user.last_name}`,
}));

const SearchBarAutoComplete = () => {
  return (
    <AutoComplete
      style={{ width: 500 }}
      options={options}
      placeholder="Search for User"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    ></AutoComplete>
  );
};

export default SearchBarAutoComplete;
