import React, {useState} from "react";





const mentorForm = ()=> {
    const [mentor, setMentor] = useState ({
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
        <label>
            Created Date
            <br></br>
            <input placeholder={mentor.results[0].created_date}>
            </input>
        </label>
        <label>
            Modified Date
            <br></br>
            <input placeholder={mentor.results[0].modified_date}>
            </input>
        </label>
        <label>
            Is Interested
            <br></br>
            <input placeholder={mentor.results[0].isInterested}>
            </input>
        </label>
        <label>
            Is Incomplete
            <br></br>
            <input placeholder={mentor.results[0].isIncomplete}>
            </input>
        </label>
        <label>
            Follow Up
            <br></br>
            <input placeholder={mentor.results[0].follow_up}>
            </input>
        </label>
        <label>
            Occupation
            <br></br>
            <input placeholder={mentor.results[0].occupation}>
            </input>
        </label>
        <label>
            VBB Chapter
            <br></br>
            <input placeholder={mentor.results[0].vbb_chapter}>
            </input>
        </label>
        <label>
            Affiliation
            <br></br>
            <input placeholder={mentor.results[0].affiliation}>
            </input>
        </label>
        <label>
            Coporate Employee Program 
            <br></br>
            <input placeholder={mentor.results[0].isinCoporateEmployeeProgram}>
            </input>
        </label>
        <label>
            Referral Source
            <br></br>
            <input placeholder={mentor.results[0].referral_source}>
            </input>
        </label>
        <label>
            Is Staff
            <br></br>
            <input placeholder={mentor.results[0].isStaff}>
            </input>
        </label>
        <label>
            Is Adult
            <br></br>
            <input placeholder={mentor.results[0].is_adult}>
            </input>
        </label>
        <label>
            Terms and Agreements
            <br></br>
            <input placeholder={mentor.results[0].terms_agreement}>
            </input>
        </label>
        <label>
            Mentor Application Video
            <br></br>
            <input placeholder={mentor.results[0].mentor_application_video_link}>
            </input>
        </label>
        <label>
            Application Submitted
            <br></br>
            <input placeholder={mentor.results[0].application_submitted}>
            </input>
        </label>
        <label>
            One Time Donated
            <br></br>
            <input placeholder={mentor.results[0].onetime_donated}>
            </input>
        </label>
        <label>
            Recurring Donation
            <br></br>
            <input placeholder={mentor.results[0].recurring_donation}>
            </input>
        </label>
        <label>
            Legal Notes By Mentor
            <br></br>
            <input placeholder={mentor.results[0].legal_notes_bymentor}>
            </input>
        </label>
        <label>
            Legal Notes By Reviewer
            <br></br>
            <input placeholder={mentor.results[0].legal_notes_byreviewer}>
            </input>
        </label>
        <label>
            Vetted
            <br></br>
            <input placeholder={mentor.results[0].vetted}>
            </input>
        </label>
        <label>
            Training Scheduled
            <br></br>
            <input placeholder={mentor.results[0].trainingScheduled}>
            </input>
        </label>
        <label>
            Attended Training
            <br></br>
            <input placeholder={mentor.results[0].attended_training}>
            </input>
        </label>
        <label>
            Training Notes
            <br></br>
            <input placeholder={mentor.results[0].trainingNotes}>
            </input>
        </label>
        <label>
            Completed Training Modules
            <br></br>
            <input placeholder={mentor.results[0].completed_trainingModules}>
            </input>
        </label>
        <label>
            Next Lead Mentor Meeting Date
            <br></br>
            <input placeholder={mentor.results[0].nextLeadMentor_meeting_date}>
            </input>
        </label>
        <label>
            Next Lead Mentor Meeting Info
            <br></br>
            <input placeholder={mentor.results[0].nextLeadMentor_meetingInfo}>
            </input>
        </label>
        <label>
            Lead Mentor Notes
            <br></br>
            <input placeholder={mentor.results[0].leadmentor_notes}>
            </input>
        </label>
        <label>
            Met Headmaster
            <br></br>
            <input placeholder={mentor.results[0].metHeadmaster}>
            </input>
        </label>
        <label>
            Headmaster Notes
            <br></br>
            <input placeholder={mentor.results[0].headmaster_notes}>
            </input>
        </label>
        <label>
            Met Mentor Advisor
            <br></br>
            <input placeholder={mentor.results[0].metMentorAdvisor}>
            </input>
        </label>
        <label>
            Mentor Advisor Notes
            <br></br>
            <input placeholder={mentor.results[0].mentorAdvisor_notes}>
            </input>
        </label>
        <label>
            Additional Involvement
            <br></br>
            <input placeholder={mentor.results[0].additional_involvement}>
            </input>
        </label>

  </form>

)
};

export default mentorForm;
