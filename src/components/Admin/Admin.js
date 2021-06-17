import {React, Component, useState} from 'react';
import AddUserForm from './AddUserForm';
import {
  Table,
  Tag,
  Space,
  Form,
  Input,
  Button
} from 'antd';

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

/*Form Styling*/
const layout = {
  labelCol: { span: 1 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

const buttonLayout = {
  wrapperCol: { offset: 12, span: 16 },
};
/*End Form Styling*/
const Admin = props => {
    const [show, setShow] = useState(true)
    const onClick = () => setShow(!show)
    return(
        <>
            <Form.Item {...buttonLayout}>
              <Button onclick = {onClick}
                type = "primary"
                onClick = {onClick}
              > Create New User</Button>
            </Form.Item>
            { show ? <AddUserForm/> : null}
            <Table 
              columns={columns} 
              expandable={{
                expandedRowRender: record => (
                  <p style={{ margin: 0 }}>
                    <Form
                      {...layout}
                      name="basic"
                    >
                      <Form.Item
                        label="First Name"
                        name="fname"
                      >
                        <Input defaultValue={record.fname} />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        name="lname"
                      >
                        <Input defaultValue={record.lname} />
                      </Form.Item>
                      <Form.Item
                        label="Phone"
                        name="phone"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item {...tailLayout}>
                        <Button
                          type="primary"
                          htmlType="submit"
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </p>
                ),
                rowExpandable: record => record,
              }}
              dataSource={data}
              scroll={{ y: 240 }} 
            />
        </>
    );
};

export default Admin;