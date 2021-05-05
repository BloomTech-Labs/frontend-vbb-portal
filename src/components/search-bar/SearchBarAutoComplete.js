import React, { useState } from 'react';
import { AutoComplete, Input, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import dummy from './MOCK_DATA.json';
import {getMentors} from "./SearchbarAPI";

const SearchBarAutoComplete = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

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
  ];

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  return (
    <>
      <AutoComplete
        style={{ width: 500 }}
        options={listOptions}
        filterOption={true}
        autoClearSearchValue={true}
        onSelect={() => setIsVisible(true)}
      >
        <Input.Search size="large" placeholder="Find User" />
      </AutoComplete>
      <Modal
        title="Mentee Name"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedUser ? (
          <>
            <h3>{selectedUser.id}</h3>
            <h1>{selectedUser.full_name}</h1>
            <p>{selectedUser.date_of_birth}</p>
            <p>{selectedUser.personal_email}</p>
            <p>{selectedUser.phone}</p>
            <p>{selectedUser.city}</p>
          </>
        ) : null}
      </Modal>
    </>
  );
};

export default SearchBarAutoComplete;
