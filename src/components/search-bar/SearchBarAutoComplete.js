import SearchModalContent from '../Modal/SeachModalFragment'
import React, { useState } from 'react';
import { AutoComplete, Button, Input, Modal} from 'antd';
import useModal from '../Modal/useModal'
import { v4 as uuidv4 } from 'uuid';
import dummy from './MOCK_DATA.json';
import { withRouter, Link } from 'react-router-dom';
import { logIn } from '../../redux/actions';
import Calendar from "../Calendar/Calendar"


const SearchBarAutoComplete = () => {
  const SearchModal = Modal
 const {isVisible, toggleModal, selectedUser } = useModal(SearchModal)




  const renderTitle = (title) => {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          rel="noopener noreferrer"
        >
          More
        </a>
      </span>
    );
  };

  const renderItem = (user, key) => ({
    value: user.full_name,
    label: (
      <div
        key={key}
        style={{ display: 'flex', justifyContent: 'space-between' }}
        onClick={() => setSelectedUser(user)}
      >
        {user.full_name}
      </div>
    ),
    key,
  });

  const renderFeature = (feature, key) => ({
    value: feature.name,
    label: (
      <Link to= {feature.url} >
      <div 
       
        key={key}
        style={{ display: 'flex', justifyContent: 'space-between' }}
        //onClick={() => setSelectedFeature(feature)}
        //onClick = {() => SearchModal.isVisible = false}
      >
        {feature.name}
      </div>
      </Link>
    ),
    key,
  });

  //to add features to display in search bar add them in this array
  const features = [
    {name: "calendar", url: "/calendar/"},
    {name: "donate", url: "/donate/"},
    {name: "signup", url: "/signup/"},
    {name: "signin", url: "/signin/"},
    {name: "booking", url: "/booking/"},
    {name: "dashboard", url: "/"},
    {name: "register", url: "/register/"},
    {name: "Create Mentor", url: ""}
  ]

  const options = dummy.map((user) => {
    const reformattedUser = {
      ...user,
      full_name: `${user.first_name} ${user.last_name}`,
    };
    return reformattedUser;
  });

  /**
   * @description This an array that display different sections in the search-bar sepereated by Students and Students
   */
  const listOptions = [
    {
      label: renderTitle('Students'),
      options: options.map((user) => renderItem(user, uuidv4())),
    },
    {
      label: renderTitle('Teachers'),
      options: options.map((user) => renderItem(user, uuidv4())),
    },
    {
      label: renderTitle("Features"),
      options: features.map((feature) => renderFeature(feature, uuidv4())),
    }
  ];

  return (
    <>
      <AutoComplete
        style={{ width: 500 }}
        options={listOptions}
        filterOption={true}
        autoClearSearchValue={true}
        onSelect={() => toggleModal(SearchModal)}
      >
        <Input.Search size="large" placeholder="Find User" />
      </AutoComplete>
      <SearchModal title={selectedUser.full_name} visible={isVisible} onOk={toggleModal} onCancel={toggleModal} >
        <SearchModalContent user={selectedUser}/>
      </SearchModal> 

    </>
  );
};

export default SearchBarAutoComplete;
