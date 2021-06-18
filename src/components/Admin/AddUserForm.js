import {React, Component, useState} from 'react';
import {
  Divider,
  Form,
  Input,
  Button
} from 'antd';

/*Form Styling*/
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
  
const buttonLayout = {
    wrapperCol: { offset: 12, span: 16 },
};


/*End Form Styling*/
const AddUserForm = props => {
    const { EditMode, Record } = props;

    return(
        <div>
            <Form
                {...layout}
                name= "basic">
                <Form.Item
                    label="First Name"
                    name="fname"
                >
                    <Input defaultValue={EditMode ? Record.first_name : ''}/>
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lname"
                >
                    <Input defaultValue={EditMode ? Record.last_name : ''}/>
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                >
                    <Input defaultValue={EditMode ? Record.phone : ''}/>
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