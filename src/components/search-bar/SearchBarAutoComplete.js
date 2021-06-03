import SearchModalContent from '../Modal/SeachModalFragment';
import React, { useEffect, useState } from 'react';
import { AutoComplete, Input, Modal, Button } from 'antd';
import useModal from '../Modal/useModal'
import StudentInfo from './StudentInfo'
import { withRouter, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import dummy from './MOCK_DATA.json';
import axios from "axios";
import { PYTHON_API } from "../../redux/actions/index";
import AllAPIS from './SearchbarAPI';

const SearchBarAutoComplete = () => {

  const SearchModal = Modal
  const { isVisible, selectedUser, toggleModal } = useModal(SearchModal)
  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [filter, setFilter] = useState(true);

  const mentor_id = null; // undefined for now until API ready to avoid useEffect problems

  //Need to connect with back end and have a PUT request for Edit button, this endpoint requires an external id
  //Once backend is ready and seeded, use the searchbarAPI to make requests to the backend
  useEffect((mentor_id) => {
    axios.get(`${PYTHON_API}v1/mentor/${mentor_id}/`)
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          const err = (data && data.message) || res.status;
          return Promise.reject(err);
        }
      })
      .catch(error => {
        setErrorMessage(error);
        console.error("error", error);
      });
  }, [mentor_id]);

  const renderTitle = (title, href = "https://www.google.com/search?q=antd") => {
    return (
      <span key={title}>
        {title}
        <a
          style={{ float: 'right' }}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
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
        onClick={() => toggleModal(SearchModal, user)}
      >
        {user.full_name}
      </div>
    ),
    key,
  });

  const renderFeature = (feature, key) => ({
    value: feature.name,
    label: (
      <Link to={feature.url} key={key}>
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
    { name: 'Calendar', url: '/calendar/' },
    { name: 'Donate', url: '/donate/' },
    { name: 'Sign up', url: '/signup/' },
    { name: 'Sign in', url: '/signin/' },
    { name: 'Booking', url: '/booking/' },
    { name: 'Dashboard', url: '/' },
    { name: 'Register', url: '/register/' },
    { name: 'Create Mentor', url: '' },
  ];

  const options = dummy.map((user) => {
    const reformattedUser = {
      ...user,
      full_name: `${user.first_name} ${user.last_name}`,
    };
    return reformattedUser;
  });

  /**
   * @description This an array that display different sections in the search-bar separated by Students and Students
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
      label: renderTitle('Features'),
      options: features.map((feature) => renderFeature(feature, uuidv4())),
    },
  ];

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  let searchbarContent = '';
  const [newListOptions, setNewListOptions] = useState(listOptions);

  const handleSearch = (e) => {
    searchbarContent = e;
    changeListOptions()
  };

  const changeListOptions = () => {
    if (searchbarContent === 'students') {
      setNewListOptions([listOptions[0]]);
      setFilter(false);
      return newListOptions;
    }
    if (searchbarContent === 'teachers') {
      setNewListOptions([listOptions[1]]);
      setFilter(false);
      return newListOptions;
    }
    else {
      setNewListOptions(listOptions);
      setFilter(true);
      return newListOptions;
    }
  };

  return (
    <>
      <AutoComplete
        style={{ width: 500 }}
        options={newListOptions}
        onSearch={handleSearch}
        filterOption={filter}
        autoClearSearchValue={true}
        key="autoComplete"
      >
        <Input.Search size="large" placeholder="Find User" />
      </AutoComplete>
      <SearchModal visible={isVisible} onOk={toggleModal} onCancel={toggleModal} destroyOnClose={true} key="searchModal" >
        {!isEditing ? <>
          <SearchModalContent user={selectedUser} />
          <Button onClick={handleEdit}>Edit</Button>
        </>
          : <StudentInfo user={selectedUser} closeEditing={handleEdit} />}
      </SearchModal>
    </>
  );
};


export default SearchBarAutoComplete;
