import { useState } from 'react';

export default function useForm(initialValues){
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        e.persist();

        setValues({
            ...values,
            [e.target.name]: e.target.value
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