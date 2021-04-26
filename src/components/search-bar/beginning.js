import React from 'react';
import { AutoComplete, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import dummy from './MOCK_DATA.json';

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

const renderItem = ({ value: name }, key) => ({
  value: name,
  label: (
    <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
      {name}
    </div>
  ),
  key: uuidv4(),
});

const options = dummy.map((user) => ({
  value: `${user.first_name} ${user.last_name}`,
}));

/**
 * @description This an array that display different sections in the search-bar sepereated by Students and Students
 */
const listOptions = [
  {
    label: renderTitle('Students'),
    options: options.map((item) => renderItem(item, uuidv4())),
  },
  {
    label: renderTitle('Teachers'),
    options: options.map((item) => renderItem(item, uuidv4())),
  },
];

const SearchBarAutoComplete = () => {
  return (
    <AutoComplete
      style={{ width: 500 }}
      options={listOptions}
      filterOption={true}
      autoClearSearchValue={true}
    >
      <Input.Search size="large" placeholder="Find User" />
    </AutoComplete>
  );
};

export default SearchBarAutoComplete;
