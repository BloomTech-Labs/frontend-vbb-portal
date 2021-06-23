import {React, Component, useState} from 'react';
import {
  Divider,
  Form,
  Input,
  Switch,
  Button
} from 'antd';

import useForm from '../../hooks/useForm';

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
    phone: ''
};

const AddUserForm = props => {
    const { EditMode, Record } = props;

    const [values, handleChanges, clearForm] = useForm(initialValues);

    return(
        <div>
            <Form
                {...layout}
                name= "basic">
                {EditMode ? (<Form.Item {...switchLayout}>
                                <Switch
                                    defaultChecked
                                    checkedChildren="Activated"
                                    unCheckedChildren="Deactivated"
                                    onChange={handleChanges}
                                />
                            </Form.Item>) : (
                                <></>
                            )}
                <Form.Item
                    label="First Name"
                    name="first_name"
                >
                    <Input 
                        defaultValue={EditMode ? Record.first_name : ''}
                        onChange={handleChanges}
                    />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last_name"
                >
                    <Input
                        defaultValue={EditMode ? Record.last_name : ''}
                        onChange={handleChanges}
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                >
                    <Input 
                        defaultValue={EditMode ? Record.phone : ''}
                        onChange={handleChanges}
                    />
                </Form.Item>
                <Form.Item {...buttonLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        {EditMode ? 'Edit User' : 'Add New User'}
                    </Button>
                </Form.Item>
            </Form>
            <Divider />
        </div>
    )
}

export default AddUserForm;