import React, { useState } from 'react'
import SearchField from './SearchField'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const SearchBar = () => {
    const [value,setValue] = useState({});
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
    //onChange function for whenever the user is typing needs to pass state down to search field



    return (
        <>
        <Search
            type = 'text'
            enterButton = "Search"
            style = {{ width: '500px' }}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <SearchField  value = {value} />
       
        </>
    )
}

export default SearchBar