import '../../less/Modal.less';

const StudentInfoEdit = ({ changeHandler, user }) => {
  return (
    <form className="StudentInfoForm">
      <label className="label">
        ID
        <br></br>
        <input name="id" onChange={changeHandler} value={user.id} />
      </label>
      <label className="label">
        First Name
        <br></br>
        <input
          name="first_name"
          onChange={changeHandler}
          value={user.first_name}
        />
      </label>
      <label className="label">
        Last Name
        <br></br>
        <input
          name="last_name"
          onChange={changeHandler}
          value={user.last_name}
        />
      </label>
      <br></br>
      <label className="label">
        Date of Birth
        <br></br>
        <input
          name="date_of_birth"
          onChange={changeHandler}
          value={user.date_of_birth}
        />
      </label>
      <label className="label">
        Personal Email
        <br></br>
        <input
          name="personal_email"
          onChange={changeHandler}
          value={user.personal_email}
        />
      </label>
      <label className="label">
        Location
        <br></br>
        <input name="city" onChange={changeHandler} value={user.city} />
      </label>
    </form>
  );
};

export default StudentInfoEdit;
