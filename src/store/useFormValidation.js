import {useState, useEffect} from "react";


function useFormvalidation(initialState, validate, authenticate){
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

 
    useEffect(()=>{
         
        if(isSubmit){
           const noErrors= Object.keys(errors).length === 0;

           if(noErrors){
            authenticate();

            setIsSubmit(false);
           }else{
            setIsSubmit(false);
           }
        }
    }, [errors, isSubmit, authenticate])


    function handleChange(e){
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    function handleBlur(){
        const validateErr = validate(values);
        setErrors(validateErr);
    }

    function handleSubmit(e){
        e.preventDefault();
        const validateErr = validate(values);
        setErrors(validateErr);
        setIsSubmit(true);

}

    return {handleSubmit, handleChange, values
    , handleBlur, errors, isSubmit}
}

export default useFormvalidation;