import React from "react";





const mentorForm = ()=> {
    const [mentor, setMentor] = React.useState ({
      "count": 0,
      "next": "string",
      "previous": "string",
      "results": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "user": {
            "first_name": "string",
            "last_name": "string",
            "date_of_birth": "2021-04-28",
            "time_zone": "Africa/Abidjan",
            "initials": "string",
            "personal_email": "user@example.com",
            "phone": "string",
            "city": "string",
            "notes": "string"
          },
          "created_date": "2021-04-28T23:50:25.662Z",
          "modified_date": "2021-04-28T23:50:25.662Z",
          "isInterested": true,
          "isIncomplete": true,
          "follow_up": true,
          "occupation": "string",
          "vbb_chapter": "string",
          "affiliation": "string",
          "isinCoporateEmployeeProgram": true,
          "referral_source": "string",
          "isStaff": true,
          "is_adult": true,
          "terms_agreement": true,
          "mentor_application_video_link": "string",
          "application_submitted": true,
          "onetime_donated": true,
          "recurring_donation": true,
          "legal_notes_bymentor": "string",
          "legal_notes_byreviewer": "string",
          "vetted": true,
          "trainingScheduled": true,
          "attended_training": true,
          "trainingNotes": "string",
          "completed_trainingModules": true,
          "nextLeadMentor_meeting_date": "2021-04-28T23:50:25.662Z",
          "nextLeadMentor_meetingInfo": "string",
          "leadmentor_notes": "string",
          "metHeadmaster": true,
          "headmaster_notes": "string",
          "metMentorAdvisor": true,
          "mentorAdvisor_notes": true,
          "additional_involvement": "string"
        }
      ]
    })

    const changeHandler = (e) => {
      e.persist()
      setMentor({
        ...mentor,
        [e.target.name]: e.target.value,
      })
    };
        


return(

    <form>  
       <label>
        Count
        <br></br>
        <input
          placeholder = {mentor.count}
          name = "count"
          onChange = {changeHandler}
          value = {mentor.count}
          >
        </input>
      </label>
      <br></br>
      <label>
            Next
            <br></br>
            <input 
            placeholder={mentor.next}
            name="next"
            onChange={changeHandler}
            value={mentor.next}
            >
            </input>
        </label>
        <label>
           Previous
           <br></br>
            <input placeholder={mentor.previous}>
            </input>
        </label>
        <br></br>
        <label>
            ID
            <br></br>
            <input placeholder={mentor.results[0].id}>
            </input>
        </label>
        <label>
            First Name
            <br></br>
            <input placeholder={mentor.results[0].user.first_name}>
            </input>
        </label>
        <label>
            Last Name
            <br></br>
            <input placeholder={mentor.results[0].user.last_name}>
            </input>
        </label>
        <br></br>
        <label>
            Date of Birth
            <br></br>
            <input placeholder={mentor.results[0].user.date_of_birth}>
            </input>
        </label>
        <label>
            Time Zone
            <br></br>
            <input placeholder={mentor.results[0].user.time_zone}>
            </input>
        </label>
        <label>
            Initials
            <br></br>
            <input placeholder={mentor.results[0].user.initials}>
            </input>
        </label>
        <br></br>
        <label>
            Personal Email
            <br></br>
            <input placeholder={mentor.results[0].user.personal_email}>
            </input>
        </label>
        <label>
            Phone
            <br></br>
            <input placeholder={mentor.results[0].user.phone}>
            </input>
        </label>
        <label>
            City
            <br></br>
            <input placeholder={mentor.results[0].user.city}>
            </input>
        </label>
        <br></br>
        <label>
            Notes
            <br></br>
            <input placeholder={mentor.results[0].user.notes}>
            </input>
        </label>



    </form>

)
};

export default mentorForm;
