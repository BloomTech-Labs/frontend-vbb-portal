import React, { useState } from 'react';
import SearchField from './SearchField';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState({ name: '' });

  return (
    <>
      <Search
        type="text"
        enterButton="Search"
        style={{ width: '80%', margin: '0 100px' }}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <SearchField value={value} />
    </>
  );
};

export default SearchBar;
