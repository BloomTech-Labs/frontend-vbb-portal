import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { connect } from 'react-redux';

import '../../less/Modal.less';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';
import data from '../../mock-data/MOCK_DATA.json';
import { createModal } from '../../redux/actions';

const SearchField = ({ value, toggle, setToggle, fieldRef, createModal }) => {
  //state variables
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);

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
    setList(filterData(value, options));
  }, [value, options, setToggle]);

  //use Effect for click listener

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
        <div ref={fieldRef} style={{ width: '80%' }}>
          <Card
            style={{
              backgroundColor: 'rgba(255,255,255,2.5)',
              width: '100%',
              margin: '0',
              overflow: 'hidden',
              overflowY: 'scroll',
              height: '20vh',
            }}
          >
            {list.map((e) => (
              <li
                key={e.id}
                className="searchBar"
                onClick={() => createModal(<StudentInfoModal user={e} />)}
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
          </Card>
        </div>
      )}
    </>
  );
};

export default connect(null, { createModal })(SearchField);
