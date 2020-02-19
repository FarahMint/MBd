import React, { useState,useContext} from 'react';
import useFormValidation from "../store/useFormValidation";
import { Link } from 'react-router-dom';
import validateAuth from "../store/validateAuth";
// import firebase from "../firebaseDB/firebase";

import {Auth} from "../store/auth"

const INITIAL_STATE ={
    name:"",
    email:"",
    password:""
} 

function Register({history}) {
    const {onRegister}= useContext(Auth);
    const [firebaseErr, setFirebaseErr]= useState(null);

    const {handleSubmit, handleChange, values
        , handleBlur, errors, isSubmit}=useFormValidation(INITIAL_STATE, validateAuth,handleSignUp);

    async function handleSignUp(){
        const { email, password } = values;
      
            try{
                await onRegister( email, password);
                history.push('/dashboard')
            }catch(err){
            setFirebaseErr(err.message);
            console.log("auth err" ,err);
            }
        };
   
 

	return (
		<div  className="auth-form">
            <form 
            onSubmit={handleSubmit}>
					
			<label htmlFor="name">Name</label>
            <input 
            name="name" 
            type="text"
            autoComplete="off" 
            autoFocus
            value={values.name} 
            onBlur={ handleBlur}
            onChange={handleChange} />

         
					
			<label htmlFor="email">Email Address</label>
            <input
            name="email" 
            type="email"
            autoComplete="off"
            value={values.email} 
            onBlur={ handleBlur}
            onChange={handleChange}  />
			
            { errors.email && <p className="error-text">{errors.email}</p>}
            
       
					
			<label htmlFor="password">Password</label>
            <input
            name="password"
            type="password" 
            autoComplete="off"
            value={values.password} 
            onBlur={ handleBlur}
            onChange={handleChange}  />

             { errors.password && <p className="error-text">{errors.password}</p>}	 

             {
                 firebaseErr && <p className="error-text">{firebaseErr}</p>
             }

			<button
            type="submit"
            disabled={isSubmit}
			onClick={onRegister}> Register
          	</button>
            <Link to="/login">Go back to Login
            </Link>
				
		</form>
	</div>
    )
};

export default Register;