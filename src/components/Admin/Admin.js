import {React, Component} from 'react';
import {Table, Tag, Space} from 'antd';

/*Placeholder data*/
const columns = [
    {
      title: 'First Name',
      dataIndex: 'fname',
      key: 'fname',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname',
      render: text => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'mentee') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
];

const data = [
    {
      key: '1',
      fname: 'John',
      lname: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '2',
      fname: 'Jim',
      lname: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['mentee'],
    },
    {
      key: '3',
      fname: 'Joe',
      lname: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
];

/*End Placeholder Data*/

const Admin = props => {
    return(
        <>
            <Table columns={columns} dataSource={data} />
        </>
    );
};

export default Admin;