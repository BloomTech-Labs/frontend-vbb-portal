import { Button } from 'antd'
import React from "react";
import Modal from "./Modal.css"
import { useDispatch } from "react-redux"
import { SET_REGISTRATION_FORM} from "./redux/Registration"


const StudentInfo = (props) => {
  const dispatch = useDispatch();
    const [student, setStudent] = React.useState( props.user)

    const changeHandler = (e) => {
      e.persist();
      setStudent({
        ...student,
        [e.target.name]: e.target.value,
      });
    };

    const onSubmit = (e) => {
      // this need to be connected to the backend to update the data on the database
      e.preventDefault();
      dispatch(SET_REGISTRATION_FORM)
      props.closeEditing()
    }
return (
    <form className='StudentInfoForm'>
        <label className='label'>
            ID
            <br></br>
            <input  name='id' onChange={changeHandler} value={student.id}/>

        </label>
        <label className='label'>
            First Name
            <br></br>
            <input name='first_name' onChange={changeHandler} value={student.first_name}/>
        </label>
        <label className = "label">
            Last Name
            <br></br>
            <input name='last_name' onChange={changeHandler} value={student.last_name}/>
        </label>
        <br></br>
        <label className = "label">
            Date of Birth
            <br></br>
            <input name='date_of_birth' onChange={changeHandler} value={student.date_of_birth}/>
        </label>
      <label className='label'>
        Personal Email
        <br></br>
        <input name='personal_email' onChange={changeHandler} value={student.personal_email}/>
      </label>
        <label className='label'>
            Location
            <br></br>
            <input name='city' onChange={changeHandler} value={student.city}/>
        </label>

      <Button onClick={onSubmit}>Save</Button>
    </form>
)
}

export default StudentInfo
