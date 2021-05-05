import React, {useState} from "react";
import axios from "axios";
import {PYTHON_API} from "../../redux/actions/index";

const getHeadmasters = () => {
    axios.get(`${PYTHON_API}headmaster`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createHeadmaster = () => {
    axios.post(`${PYTHON_API}headmaster`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getHeadmasterById = () => {
    axios.get(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateHeadmasterById = () => {
    axios.put(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteHeadmasterById = () => {
    axios.delete(`${PYTHON_API}headmaster/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getMentors = () => {
    axios.get(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createMentor = () => {
    axios.post(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getMentorById = () => {
    axios.get(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateMentorById = () => {
    axios.put(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteMentorById = () => {
    axios.delete(`${PYTHON_API}mentor/:id/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getMentees = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createMentee = () => {
    axios.post(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getMenteeById = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateMenteeById = () => {
    axios.put(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteMenteeById = () => {
    axios.delete(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getStudentsByProgramAndSchool = () => {
    axios.get(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createStudentsByProgramAndSchool = () => {
    axios.post(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getStudentByProgramAndSchoolAndId  = () => {
    axios.get(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateStudentByProgramAndSchoolAndId  = () => {
    axios.put(`${PYTHON_API}program/:program_external_id/school:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteStudentByProgramAndSchoolAndId  = () => {
    axios.delete(`${PYTHON_API}program/:program_external_id/school/:school_external_id/student/:external_id`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default {
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
    createStudentsByProgramAndSchool,
    getStudentByProgramAndSchoolAndId,
    updateStudentByProgramAndSchoolAndId,
    deleteStudentByProgramAndSchoolAndId,
}
