import React from "react";
import Modal from "./Modal.css"


const StudentInfo = () => {
    const [student, setStudent] = React.useState({
            "count": 0,
            "next": "string",
            "previous": "string",
            "results": [
              {
                "id": "string",
                "user": {
                  "first_name": "string",
                  "last_name": "string",
                  "date_of_birth": "string",
                  "time_zone": "string",
                  "initials": "string",
                  "personal_email": "user@example.com",
                  "phone": "string",
                  "city": "string",
                  "notes": "string"
                },
                "created_date": "string",
                "modified_date": "string",
                "external_id": "string",
                "school_level": 0,
                "group_name": "string"
              }
            ]
    })

    const changeHandler = (e) => {
      e.persist();
      setStudent({
        ...student,
        [e.target.name]: e.target.value,
      });
    };

return (
    <form className = "StudentInfoForm">
        {/* <label className = "label">
            Count
            <br></br>
            <input 
            placeholder={student.count}
            name="count"
            onChange={changeHandler}
            value={student.count}
            >
            </input>
        </label>
        <br></br>
        <label className = "label">
            Next
            <br></br>
            <input 
            placeholder={student.next}
            name="next"
            onChange={changeHandler}
            value={student.next}
            >
            </input>
        </label>
        <label className = "label">
           Previous
           <br></br>
            <input placeholder={student.previous}>
            </input>
        </label>
        <br></br> */}
        {/* <label className = "label">
            ID
            <br></br>
            <input placeholder={student.results[0].id}>
            </input>
        </label> */}
        <label className = "label">
            First Name
            <br></br>
            <input placeholder={student.results[0].user.first_name}>
            </input>
        </label>
        <label className = "label">
            Last Name
            <br></br>
            <input placeholder={student.results[0].user.last_name}>
            </input>
        </label>
        <br></br>
        <label className = "label">
            Date of Birth
            <br></br>
            <input placeholder={student.results[0].user.date_of_birth}>
            </input>
        </label>
        <label className = "label">
            Time Zone
            <br></br>
            <input placeholder={student.results[0].user.time_zone}>
            </input>
        </label>
        <label className = "label">
            Initials
            <br></br>
            <input placeholder={student.results[0].user.initials}>
            </input>
        </label>
        <br></br>
        <label className = "label">
            Personal Email
            <br></br>
            <input placeholder={student.results[0].user.personal_email}>
            </input>
        </label>
        <label className = "label">
            Phone
            <br></br>
            <input placeholder={student.results[0].user.phone}>
            </input>
        </label>
        <label className = "label">
            City
            <br></br>
            <input placeholder={student.results[0].user.city}>
            </input>
        </label>
        <br></br>
        <label className = "label">
            Notes
            <br></br>
            <input placeholder={student.results[0].user.notes}>
            </input>
        </label>
        {/* <label className = "label">
            Created Date
            <br></br>
            <input placeholder={student.results[0].created_date}>
            </input>
        </label> */}
        {/* <label className = "label">
            Motified Date
            <br></br>
            <input placeholder={student.results[0].modified_date}>
            </input>
        </label>
        <br></br>
        <label className = "label">
            External ID
            <br></br>
            <input placeholder={student.results[0].external_id}>
            </input>
        </label> */}
        <label className = "label">
            School Level
            <br></br>
            <input placeholder={student.results[0].school_level}>
            </input>
        </label>
        <label className = "label">
            Group Name
            <br></br>
            <input placeholder={student.results[0].group_name}>
            </input>
        </label>
        <br></br>
        <button className = "button">Edit</button>
    </form>
)
}

export default StudentInfo