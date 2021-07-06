import {useState} from 'react';
import AddUserForm from './AddUserForm';
import {
  Form,
  Button,
  Collapse
} from 'antd';

import moment from 'moment';

/*Placeholder data*/
const { Panel } = Collapse;

const data = [
    {
      key: '1',
      first_name: 'John',
      last_name: 'Brown',
      phone: '123-456-7890',
      email: 'test1@test.com',
      dob: moment('01/01/2000','MM/DD/YYYY')
    },
    {
      key: '2',
      first_name: 'Jim',
      last_name: 'Green',
      phone: '888-523-8850',
      email: 'test2@test.com',
      dob: moment('12/22/2011')
    },
    {
      key: '3',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010')
    },
    {
      key: '4',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010')
    },
    {
      key: '5',
      first_name: 'Joe',
      last_name: 'Black',
      phone: '123-000-0000',
      email: 'test3@test.com',
      dob: moment('04/05/2010')
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
                      editMode 
                      record={record}
                    />
                  </Panel>
                )
              )}
            </Collapse>
        </>
    );
};

export default Admin;