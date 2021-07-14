import React, { useEffect, useState } from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import '../../../less/computers-list-style.less'
import { students } from '../data'
import { mentors } from '../data'
import { startTime } from '../data'
import { endTime } from '../data'
const ComputersList = (props) => {
    const newList = []
    const numComputers = 10
    for (let i = 1; i <= numComputers; i++) {
        newList.push('computer')
    }
    useEffect(() => {
    })
    const [serverError, setServerError] = useState("");
    const [formState, setFormState] = useState({
        mentor: "",
        student: "",
        startTime: "",
        endTime: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        mentor: "",
        student: "",
        startTime: "",
        endTime: "",
    });
    const formSchema = yup.object().shape({
        mentor: yup.string().oneOf(["Leo", "Calli", "Morgan"]),
        student: yup.string().oneOf(["Nyx", "Steven", "Morgan"]),
        startTime: yup.string().oneOf(["10am", "11am", "12pm"]),
        endTime: yup.string().oneOf(["11am", "12pm", "1pm"]),
    });
    useEffect(() => {
        formSchema.isValid(formState).then((isFormValid) => {
            console.log("is form valid?", isFormValid);
            setButtonDisabled(!isFormValid);
        });
    }, [formState]);
    const formSubmit = (e) => {
        e.preventDefault();
        setFormState({
            mentor: "",
            student: "",
            startTime: "",
            endTime: "",
        });
    };
    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name === "clicked" ? e.target.checked : e.target.value)
            .then((inputIsValid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    };
    const inputChange = (e) => {
        e.persist();
        console.log("input changed!", e.target.value);
        console.log("name of input that fired event", e.target.name);
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.name === "clicked" ? e.target.checked : e.target.value
        };
        setServerError(null);
        validateChange(e);
        setFormState(newFormData);
    };
    
    /*Funcionality for Return and Save Changes button*/
    const [open, setOpen] = React.useState(false);
  
    const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  const [openReturn, setOpenReturn] = React.useState(false);
  
    const handleClickToOpenReturn = () => {
    setOpenReturn(true);
  };
  
  const handleToCloseReturn = () => {
    setOpenReturn(false);
  };

  const handleCalender=()=>{
    window.location.reload();
  }

    return (
        <form onSubmit={formSubmit}>
            {/* in case we somehow got here without props. */}
            {props.dragSelected ? <p className='date-time-string'>{props.dragSelected.start.toLocaleString()} to {props.dragSelected.end.toLocaleString()}</p> : null}
            <div className='container'>
                <div className='computer-list-container'>
                    {newList.map((computer, i) => {
                        return (
                            <div className='computer-list' key={i}>
                                <div className={formState.mentor && formState.student && formState.startTime && formState.endTime ? `unavailable mentee-mentors-container` : `unavailable`}>{computer + (i + 1)}</div>
                                <div>
                                    {serverError ? <p className="error">{serverError}</p> : null}
                                    <select className='mentor-list' id="mentor" name="mentor" onChange={inputChange}>
                                        <option value="none" selected disabled>Mentors List</option>
                                        {mentors.map((mentor, i) => {
                                            return <option key={i}>{mentor}</option>
                                        })}
                                    </select>
                                    {errors.mentor.length > 0 ? (
                                        <p className="error">{errors.mentor}</p>
                                    ) : null}
                                    <select className='students-list' id="student" name="student" onChange={inputChange}>
                                        <option value="none" selected disabled>Students List</option>
                                        {students.map((student, i) => {
                                            return <option key={i}>{student}</option>
                                        })}
                                    </select>
                                    {errors.student.length > 0 ? (
                                        <p className="error">{errors.student}</p>
                                    ) : null}
                                    <select className='start-time-list' id="startTime" name="startTime" onChange={inputChange}>
                                        <option value="none" selected disabled>Start Time</option>
                                        {startTime.map((start, i) => {
                                            return <option key={i}>{start}</option>
                                        })}
                                    </select>
                                    {errors.startTime.length > 0 ? (
                                        <p className="error">{errors.startTime}</p>
                                    ) : null}
                                    <select className='end-time-list' id="endTime" name="endTime" onChange={inputChange}>
                                        <option value="none" selected disabled>End Time</option>
                                        {endTime.map((end, i) => {
                                            return <option key={i}>{end}</option>
                                        })}
                                    </select>
                                    {errors.endTime.length > 0 ? (
                                        <p className="error">{errors.endTime}</p>
                                    ) : null}
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>

           {/*  Code for React popup message*/ }
            <div className='buttons-container'>
               <button className='scheduler-button' disabled={buttonDisabled} type="submit" onClick={handleClickToOpen}>
                Save Changes
                </button>
                <Dialog open={open} onClose={handleToClose}>
                    <DialogTitle></DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                    Would you like to save all changes?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleToClose} 
                            color="primary" autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>

                <button className='scheduler-button' onClick={handleClickToOpenReturn}>
                 Return
                </button>
                <Dialog open={openReturn} onClose={handleToCloseReturn}>
                   <DialogContent>
                    <DialogContentText>
                    Would you like to return to the calendar and not save your changes?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleToCloseReturn} 
                            color="primary" autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleCalender} 
                            color="primary">
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog>
    </div>
  </form>
    )
}
export default ComputersList