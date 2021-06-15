import {React, Component} from 'react';
import {Table, Tag, Space} from 'antd';

/*Placeholder data*/
const columns = [
    {
      title: 'First Name',
      dataIndex: 'fname',
      filters: [
        {
          text: 'Joe',
          value: 'Joe'
        },
        {
          text: 'Jim',
          value: 'Jim'
        }
      ],
      onFilter: (value, record) => record.fname.indexOf(value) === 0,
      key: 'fname',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Last Name',
      dataIndex: 'lname',
      filters: [
        {
          text: 'Brown',
          value: 'Brown'
        },
        {
          text: 'Green',
          value: 'Green'
        },
        {
          text: 'Black',
          value: 'Black'
        }
      ],
      onFilter: (value, record) => record.lname.indexOf(value) === 0,
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
      filters: [
        {
          text: 'Mentee',
          value: 'mentee'
        },
        {
          text: 'Mentor',
          value: 'mentor'
        }
      ],
      onFilter: (value, record) => record.tags.includes(value),
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
          <a>Edit</a>
          <a>Deactivate</a>
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
    {
      key: '4',
      fname: 'Joe',
      lname: 'Black',
      age: 37,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '5',
      fname: 'Joe',
      lname: 'Black',
      age: 39,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '6',
      fname: 'Joe',
      lname: 'Black',
      age: 3,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '7',
      fname: 'Joe',
      lname: 'Black',
      age: 89,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '8',
      fname: 'Joe',
      lname: 'Black',
      age: 22,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
    {
      key: '9',
      fname: 'Joe',
      lname: 'Black',
      age: 75,
      address: 'Sidney No. 1 Lake Park',
      tags: ['mentor'],
    },
];

/*End Placeholder Data*/

const Admin = props => {
    return(
        <>
            <Table 
              columns={columns} 
              expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>Form goes here</p>,
                rowExpandable: record => record,
              }}
              dataSource={data}
              scroll={{ y: 240 }} 
            />
        </>
    );
};

export default Admin;