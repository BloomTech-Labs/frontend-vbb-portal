import React, {useState} from "react";
import axios from "axios";
import {PYTHON_API} from "../../redux/actions/index";

export const Headmasters = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const createHeadmaster = () => {
    axios.post(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMentorById = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const updateHeadmasterById = () => {
    axios.put(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteHeadmasterById = () => {
    axios.delete(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMentors = () => {
    axios.get(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const createMentors = () => {
    axios.post(`${PYTHON_API}mentor`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMentorById = () => {
    axios.get(`${PYTHON_API}mentor/${id}/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const updateMentorById = () => {
    axios.put(`${PYTHON_API}mentor/${id}/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteMentorById = () => {
    axios.delete(`${PYTHON_API}mentor/${id}/`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMentees = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const createMentee = () => {
    axios.post(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getMenteeById = () => {
    axios.get(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const updateMenteeById = () => {
    axios.put(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteMenteeById = () => {
    axios.delete(``)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}