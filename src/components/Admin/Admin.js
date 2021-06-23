import {React, Component, useState} from 'react';
import AddUserForm from './AddUserForm';
import {
  Table,
  Tag,
  Space,
  Form,
  Input,
  Button,
  Collapse
} from 'antd';

/*Placeholder data*/
const { Panel } = Collapse;

const data = [
    {
      key: '1',
      first_name: 'John',
      last_name: 'Brown',
      phone: '123-000-0000'
    },
    {
      key: '2',
      first_name: 'Jim',
      last_name: 'Green',
      phone: '123-000-0000'
    },
    {
      key: '3',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000'
    },
    {
      key: '4',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000'
    },
    {
      key: '5',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000'
    },
];

/*End Placeholder Data*/

/*Form Styling*/
const layout = {
  labelCol: { span: 2 },
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
              <Button
                type = "primary"
                onClick = {onClick}
              > Create New User</Button>
            </Form.Item>
            { show ? <AddUserForm/> : null}
            <Collapse accordion>
              {data.map(record => (
                  <Panel header={record.first_name + ' ' + record.last_name} key={record.key}>
                    <AddUserForm 
                      EditMode 
                      Record={record}
                    />
                  </Panel>
                )
              )}
            </Collapse>
        </>
    );
};

export default Admin;