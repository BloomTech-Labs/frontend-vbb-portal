import React from "react";

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
    <form>
        {/* <label>
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
        <label>
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
        <label>
           Previous
           <br></br>
            <input placeholder={student.previous}>
            </input>
        </label>
        <br></br> */}
        <label>
            ID
            <br></br>
            <input placeholder={student.results[0].id}>
            </input>
        </label>
        <label>
            First Name
            <br></br>
            <input placeholder={student.results[0].user.first_name}>
            </input>
        </label>
        <label>
            Last Name
            <br></br>
            <input placeholder={student.results[0].user.last_name}>
            </input>
        </label>
        <br></br>
        <label>
            Date of Birth
            <br></br>
            <input placeholder={student.results[0].user.date_of_birth}>
            </input>
        </label>
        <label>
            Time Zone
            <br></br>
            <input placeholder={student.results[0].user.time_zone}>
            </input>
        </label>
        <label>
            Initials
            <br></br>
            <input placeholder={student.results[0].user.initials}>
            </input>
        </label>
        <br></br>
        <label>
            Personal Email
            <br></br>
            <input placeholder={student.results[0].user.personal_email}>
            </input>
        </label>
        <label>
            Phone
            <br></br>
            <input placeholder={student.results[0].user.phone}>
            </input>
        </label>
        <label>
            City
            <br></br>
            <input placeholder={student.results[0].user.city}>
            </input>
        </label>
        <br></br>
        <label>
            Notes
            <br></br>
            <input placeholder={student.results[0].user.notes}>
            </input>
        </label>
        <label>
            Created Date
            <br></br>
            <input placeholder={student.results[0].created_date}>
            </input>
        </label>
        <label>
            Motified Date
            <br></br>
            <input placeholder={student.results[0].modified_date}>
            </input>
        </label>
        <br></br>
        <label>
            External ID
            <br></br>
            <input placeholder={student.results[0].external_id}>
            </input>
        </label>
        <label>
            School Level
            <br></br>
            <input placeholder={student.results[0].school_level}>
            </input>
        </label>
        <label>
            Group Name
            <br></br>
            <input placeholder={student.results[0].group_name}>
            </input>
        </label>
    </form>
)
}

export default StudentInfo