import { useState } from 'react';
import { Input, Space } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const AdminSearch = () => {
  const [, setValue] = useState();

  const { push } = useHistory();

  //This code is just for demo purposes
  //Mimicking receiving a response to an API call (backend not accessible yet)
  //Then navigating to the admin dashboard on keydown 'Enter' or button click when using search bar

  const onSearch = () => {
    push('/admin/');
  };

  const handlePressEnter = () => {
    push('/admin/');
  };

  return (
    <div>
      <p>Admin Dashboard: </p>
      <Space direction="vertical">
        <Search
          type="text"
          placeholder="Search by name or role"
          enterButton="Search"
          size="large"
          onClick={(e) => setValue(e.target.value)}
          onPressEnter={handlePressEnter}
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

export default AdminSearch;