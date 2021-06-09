import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Card } from 'antd';

import  '../search-bar/Modal.css';
import useModal from '../Modal/useModal';
import SearchModalContent from '../Modal/SeachModalFragment';
import data from '../search-bar/MOCK_DATA.json';

const SearchField = ({ value }) => {
  //state variables
  const [toggle, setToggle] = useState(false);
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);
  //custom hooks
  const { isVisible, selectedUser, toggleModal } = useModal(Modal);
  const wrapperRef = useRef(null);

  //click outside function
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  //filter function for search bar
  const filterData = (value, options) => {
    if (!value?.name?.length) {
      return [];
    }
    const searchTerm = value.name.toLowerCase();
    return options
      .filter((e) => {
        if (
          searchTerm.length <= e.first_name.length &&
          searchTerm === e.first_name.slice(0, searchTerm.length).toLowerCase()
        ) {
          return true;
        }
        if (
          searchTerm.length <= e.last_name.length &&
          searchTerm === e.last_name.slice(0, searchTerm.length).toLowerCase()
        ) {
          return true;
        }
        return false;
      })
      .slice(0, 10);
  };

  //wrote out the api call originally going to local host and everything seemed to work , reverted to local mockdata file for development
  useEffect(() => {
    setOptions(data);
  }, []);

  useEffect(() => {
    
    if (value?.name?.length >= 1) {
      setToggle(true);
    } else {
      setToggle(false);
    }
    setList(filterData(value, options));
  }, [value, options]);

  //use Effect for click listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [toggle]);

  //setting up perma features first
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

  return (
    <>
      {toggle && (
        <><div ref = {wrapperRef}>
          <Card
            style={{
              backgroundColor: 'rgba(255,255,255,2.5)',
              width: '80%',
              margin: '0 100px',
              overflow: 'hidden',
              overflowY: 'scroll',
              height: '20vh',
            }}
          >
            {list.map((e) => (
              <li
                key={e.id}
                className="searchBar"
                onClick={() => toggleModal(Modal, e)}
              >
                {' '}
                {`${e.first_name} ${e.last_name}`}{' '}
              </li>
            ))}
            {list.length === 0 && (
              <p>
                Need to register a new mentee? click here{' '}
                <Link to={'/register/'}> register </Link>
              </p>
            )}

            {features.map((feature) => (
              <Link
                key={feature.name}
                style={{ margin: '5px' }}
                to={`${feature.url}`}
                onClick={() => setToggle(false)}
              >
                {' '}
                {`${feature.name}`}{' '}
              </Link>
            ))}
            <Button
              type="primary"
              danger
              onClick={() => setToggle(false)}
              style={{ position: 'relative', float: 'right' }}
            >
              {' '}
              close{' '}
            </Button>
          </Card>
          </div>
          <Modal
            visible={isVisible}
            onOk={toggleModal}
            onCancel={toggleModal}
            destroyOnClose={true}
          >
            <SearchModalContent user={selectedUser} />
            <Button>Edit</Button>
          </Modal>
        </>
      )}
    </>
  );
};

export default SearchField;
