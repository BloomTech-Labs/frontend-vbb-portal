import React, { useState } from 'react'
import SearchField from './SearchField'
import { Input , Button, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import useModal from '../Modal/useModal';
import SearchModalContent from '../Modal/SeachModalFragment';


const SearchBar = () => {
    const [value,setValue] = useState({});
    const { Search } = Input;
    const SearchModal = Modal;
    const {isVisible, selectedUser, toggleModal } = useModal(SearchModal)
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
        <SearchModal visible={isVisible} onOk={toggleModal} onCancel={toggleModal} destroyOnClose={true} >
        <SearchModalContent user={selectedUser}/>
        <Button>Edit</Button>
      </SearchModal>
        </>
    )
}

export default SearchBar