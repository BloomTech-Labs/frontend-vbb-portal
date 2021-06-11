import React, { useState } from 'react';
import axios from 'axios';
import { PYTHON_API } from '../redux/actions/index';

//gets all headmasters
const getHeadmasters = () => {
  axios
    .get(`${PYTHON_API}v1/headmaster`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//create headmaster
const createHeadmaster = (data) => {
  axios
    .post(`${PYTHON_API}v1/headmaster`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get headmaster by id
const getHeadmasterById = (headmaster_id) => {
  axios
    .get(`${PYTHON_API}v1/headmaster/${headmaster_id}/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update headmaster by id
const updateHeadmasterById = (headmaster_id, data) => {
  axios
    .put(`${PYTHON_API}v1/headmaster/${headmaster_id}/`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//deletes headmaster by id
const deleteHeadmasterById = (headmaster_id) => {
  axios
    .delete(`${PYTHON_API}v1/headmaster/${headmaster_id}/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//gets all mentors
const getMentors = () => {
  axios
    .get(`${PYTHON_API}v1/mentor`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//creates mentor
const createMentor = (data) => {
  axios
    .post(`${PYTHON_API}v1/mentor`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get mentor by id
const getMentorById = (mentor_id) => {
  axios
    .get(`${PYTHON_API}v1/mentor/${mentor_id}/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update mentor by id
const updateMentorById = (mentor_id, data) => {
  axios
    .put(`${PYTHON_API}v1/mentor/${mentor_id}/`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete mentor by id
const deleteMentorById = (mentor_id) => {
  axios
    .delete(`${PYTHON_API}v1/mentor/${mentor_id}/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all mentees (this api does not exist yet 5/11/21)
const getMentees = () => {
  axios
    .get(``)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//create mentee (this api does not exist yet 5/11/21)
const createMentee = (data) => {
  axios
    .post(``, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get mentee by id (this api does not exist yet 5/11/21)
const getMenteeById = (mentee_id) => {
  axios
    .get(`${mentee_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update mentee by id (this api does not exist yet 5/11/21)
const updateMenteeById = (mentee_id, data) => {
  axios
    .put(`${mentee_id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete mentee by id (this api does not exist yet 5/11/21)
const deleteMenteeById = (mentee_id) => {
  axios
    .delete(`${mentee_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get students by program id and school id
const getStudentsByProgramAndSchool = (program_id, school_id) => {
  axios
    .get(`${PYTHON_API}v1/program/${program_id}/school/${school_id}/student/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//create student by program id and school id
const createStudentByProgramAndSchool = (program_id, school_id, data) => {
  axios
    .post(
      `${PYTHON_API}v1/program/${program_id}/school/${school_id}/student/`,
      data
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get student by program id and school id and student
const getStudentByProgramAndSchoolAndId = (
  program_id,
  school_id,
  student_id
) => {
  axios
    .get(
      `${PYTHON_API}v1/program/${program_id}/school/${school_id}/student/${student_id}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update student by program id and school id and student
const updateStudentByProgramAndSchoolAndId = (
  program_id,
  school_id,
  student_id,
  data
) => {
  axios
    .put(
      `${PYTHON_API}v1/program/${program_id}/school/${school_id}/student/${student_id}`,
      data
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete student by program id and school id and student
const deleteStudentByProgramAndSchoolAndId = (
  program_id,
  school_id,
  student_id
) => {
  axios
    .delete(
      `${PYTHON_API}v1/program/${program_id}/school/${school_id}/student/${student_id}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getHeadmasters,
  createHeadmaster,
  getHeadmasterById,
  updateHeadmasterById,
  deleteHeadmasterById,
  getMentors,
  createMentor,
  getMentorById,
  updateMentorById,
  deleteMentorById,
  getMentees,
  createMentee,
  getMenteeById,
  updateMenteeById,
  deleteMenteeById,
  getStudentsByProgramAndSchool,
  createStudentByProgramAndSchool,
  getStudentByProgramAndSchoolAndId,
  updateStudentByProgramAndSchoolAndId,
  deleteStudentByProgramAndSchoolAndId,
};
