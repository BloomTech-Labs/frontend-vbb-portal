import React, { useState } from 'react'
import SearchField from './SearchField'
import { Input , Button, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import useModal from '../Modal/useModal';
import { useOutsideAlerter } from './outsideAlerter';
import SearchModalContent from '../Modal/SeachModalFragment';


const SearchBar = () => {
  //states for bar features
    const [ toggle, setToggle ] = useState(false);
    const {visible, setVisible, ref} = useOutsideAlerter(false);
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
    return (
        <>
        <Search
            type = 'text'
            enterButton = "Search"
            style = {{ width: "80%", margin: "0 100px" }}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
        /> 
         <SearchField className = "searchField" value = {value} toggle = {toggle} setToggle = {setToggle} />  
         
         
        </>
    )
}

export default SearchBar