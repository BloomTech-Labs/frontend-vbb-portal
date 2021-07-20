import {useState} from 'react';
import {connect} from 'react-redux';
import AddUserForm from './AddUserForm';
import {
  Form,
  Button,
  Collapse
} from 'antd';

const { Panel } = Collapse;

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
              {props.users.map(record => (
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

const mapStateToProps = (state) => {
  return {
    users: state.getUsersReducer.users
  }
};

export default connect(mapStateToProps)(Admin);