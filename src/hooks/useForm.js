import { useState } from 'react';

export function useForm(initialValues){
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        if(e.target.type !== "button") e.persist();

        setValues({
            ...values,
            [e.target.name]: e.target.name === "activate" ? [e.target.value] : e.target.value
        });

        console.log(values);
    };

    const clearForm = () => {
        setValues(initialValues);
    };

    return [values, handleChanges, clearForm];
}

export default useForm;
