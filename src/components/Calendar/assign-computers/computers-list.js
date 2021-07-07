import React, { useEffect, useState } from 'react'
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
    const [cancelButton, setCancelButton] = useState(false);
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
        setServerError(null);
    };
    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name === "formInputs" ? e.target.checked : e.target.value)
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
                e.target.name === "formInputs" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };
    return (
        <form onSubmit={formSubmit}>
            {/* in case we somehow got here without props. */}
            {props.dragSelected ? <p className='date-time-string'>{props.dragSelected.start.toLocaleString()} to {props.dragSelected.end.toLocaleString()}</p> : null}
            <div className='container'>
                <div className='computer-list-container'>
                    {newList.map((computer, i) => {
                        return (
                            <div className='computer-list' key={i}>
                                <div className={formState.mentor && formState.student && startTime && endTime ? `unavailable mentee-mentors-container` : `unavailable`}>{computer + (i + 1)}</div>
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
                                    <button className='scheduler-button' type="submit" disabled={buttonDisabled} onClick={() => alert(`Save Changes for computer${i + 1}`)}>Save Changes </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='buttons-container'>
                {/* <button className='scheduler-button' type="submit"onClick={()=> {
                    setCancelButton(true)
                    // props.setShowCalendar(!props.showCalendar);
                }}>Cancel</button> */}
                <button className='scheduler-button' onClick={() => {
                    props.setShowWeekView(true)
                    props.setShowCalendar(!props.showCalendar);
                }}>Return</button>
            </div>
        </form>
    )
}
export default ComputersList