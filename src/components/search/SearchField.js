import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { connect } from 'react-redux';

import '../../less/Modal.less';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';
import data from '../search-bar/MOCK_DATA.json';
import { createModal } from '../../redux/actions';

const SearchField = ({ value, toggle, setToggle, fieldRef, createModal }) => {
  //state variables
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);

  // sections of the dropdown
  const listSections = useMemo(
    () => [
      {
        title: 'Students',
        data: list,
      },
      {
        title: 'Teachers',
        data: list,
      },
    ],
    [list]
  );

  const [currentListSections, setCurrentListSections] = useState([]);

  //filter function for search bar
  const filterData = (value, options) => {
    if (!value?.name?.length) {
      return [];
    }
    const searchTerm = value.name.toLowerCase();

    if (searchTerm === 'students' || searchTerm === 'teachers') {
      return options;
    }

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

  // function that filters the search result sections by keyword
  // Note: each keyword case returns it's location in the listSections array
  const filterSections = () => {
    const searchTerm = value.name.toLowerCase();
    if (searchTerm === 'students') {
      return [listSections[0]];
    }
    if (searchTerm === 'teachers') {
      return [listSections[1]];
    } else {
      return listSections;
    }
  };

  useEffect(() => {
    setOptions(data);
  }, []);

  useEffect(() => {
    setList(filterData(value, options));
  }, [value, options, setToggle]);

  useEffect(() => {
    setCurrentListSections(filterSections());
  }, [value, list]);

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
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
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
              {value.name.length > 0 &&
                list.length > 0 &&
                currentListSections.map((section) => (
                  <div key={section.title}>
                    <span style={{ fontWeight: 'bold' }}>{section.title}</span>

                    {section.data.map((user) => {
                      return (
                        <div
                          key={user.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            createModal(<StudentInfoModal user={user} />)
                          }
                        >
                          {user.first_name} {user.last_name}
                        </div>
                      );
                    })}
                  </div>
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
        </div>
      )}
    </>
  );
};

export default connect(null, { createModal })(SearchField);
