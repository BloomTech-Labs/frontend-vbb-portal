import { useState } from 'react';

export default function useForm(initialValues){
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        if(e.target.type !== "button") e.persist();
console.log(e);
        setValues({
            ...values,
            [e.target.name]: e.target.name === "activate" ? [e.target.value] : e.target.value
        });

        console.log(values);
    };

    const handleSubmit = e => {
        e.preventDefault();


    }

    const clearForm = () => {
        setValues(initialValues);
    };

    return [values, handleChanges, clearForm, handleSubmit];
}