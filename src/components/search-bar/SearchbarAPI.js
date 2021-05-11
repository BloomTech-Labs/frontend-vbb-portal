import React, {useState} from "react";
import axios from "axios";
import {PYTHON_API} from "../../redux/actions/index";


//gets all headmasters
const getHeadmasters = () => {
    axios.get(`${PYTHON_API}headmaster`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//create headmaster
const createHeadmaster = () => {
    axios.post(`${PYTHON_API}headmaster`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get headmaster by id
const getHeadmasterById = () => {
    axios.get(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//update headmaster by id
const updateHeadmasterById = () => {
    axios.put(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//deletes headmaster by id
const deleteHeadmasterById = () => {
    axios.delete(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//gets all mentors
const getMentors = () => {
    axios.get(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//creates mentor
const createMentor = () => {
    axios.post(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get mentor by id
const getMentorById = () => {
    axios.get(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//update mentor by id
const updateMentorById = () => {
    axios.put(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//delete mentor by id
const deleteMentorById = () => {
    axios.delete(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get all mentees (this api does not exist yet 5/11/21)
const getMentees = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//create mentee (this api does not exist yet 5/11/21)
const createMentee = () => {
    axios.post(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get mentee by id (this api does not exist yet 5/11/21)
const getMenteeById = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//update mentee by id (this api does not exist yet 5/11/21)
const updateMenteeById = () => {
    axios.put(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//delete mentee by id (this api does not exist yet 5/11/21)
const deleteMenteeById = () => {
    axios.delete(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get students by program id and school id
const getStudentsByProgramAndSchool = () => {
    axios.get(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//create student by program id and school id
const createStudentByProgramAndSchool = () => {
    axios.post(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//get student by program id and school id and student
const getStudentByProgramAndSchoolAndId  = () => {
    axios.get(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//update student by program id and school id and student
const updateStudentByProgramAndSchoolAndId  = () => {
    axios.put(`${PYTHON_API}program/:program_external_id/school:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

//delete student by program id and school id and student
const deleteStudentByProgramAndSchoolAndId  = () => {
    axios.delete(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

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
}
