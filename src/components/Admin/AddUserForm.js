import {React, useState} from 'react';
import {
  Divider,
  Form,
  Input,
  Switch,
  DatePicker,
  Space,
  Button
} from 'antd';

import { useForm } from '../../hooks';

import './admin.css';

/*Form Styling*/
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
  
const buttonLayout = {
    wrapperCol: { offset: 12, span: 16 },
};

const switchLayout = {
    wrapperCol: { offset: 20 },
};

/*End Form Styling*/

const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    email: ''
};

const AddUserForm = ({editMode, record, formUpdated}) => {

    const [editedNotSaved, setEditedNotSaved] = useState(false);
    const [values, handleChanges, clearForm] = useForm(initialValues);

    return(
        <div>
            <Form
                {...layout}
                name= "basic"
                className={editedNotSaved ? 'editing' : ''}
                initialValues={initialValues}
            >
                {editMode ? (<Form.Item {...switchLayout}>
                                <Switch
                                    defaultChecked
                                    checkedChildren="Activated"
                                    unCheckedChildren="Deactivated"
                                    name="activate"
                                />
                            </Form.Item>) : (
                                <></>
                            )}
                <Form.Item
                    label="First Name"
                >
                    <Input
                        name="first_name" 
                        defaultValue={editMode ? record.first_name : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                >
                    <Input
                        name="last_name"
                        defaultValue={editMode ? record.last_name : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                >
                    <Input
                        name="phone"
                        defaultValue={editMode ? record.phone : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                                setEditedNotSaved(true);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                >
                    <Input
                        name="email"
                        defaultValue={editMode ? record.email : ''}
                        onChange={
                            (e) => {
                                handleChanges(e);
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="DOB"
                >
                    <Space direction="vertical">
                        <DatePicker
                            defaultValue={editMode ? record.dob : ''}
                        />
                    </Space>
                </Form.Item>
                <Form.Item {...buttonLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => setEditedNotSaved(false)}
                    >
                        {editMode ? 'Edit User' : 'Add New User'}
                    </Button>
                </Form.Item>
            </Form>
            <Divider />
        </div>
    )
}

export default AddUserForm;
