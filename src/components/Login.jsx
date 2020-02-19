import React, {useState, useContext} from 'react'
import useFormValidation from "../store/useFormValidation";
import { Link , Redirect} from 'react-router-dom'
import validateAuth from "../store/validateAuth";

import {Auth} from "../store/auth"

const INITIAL_STATE ={
    email:"",
    password:""
}
 
function Login({history}) {

    const {state, onLogin}= useContext(Auth);
    const {isAuthenticated} = state;

    const [firebaseErr, setFirebaseErr]= useState(null );
    const {handleSubmit, handleChange, values
        , handleBlur, errors, isSubmit}=useFormValidation(INITIAL_STATE, validateAuth, handleLogin);

   

        async function handleLogin(){
            const {email, password}= values;
            try{
               await onLogin(email, password);
               history.push('/dashboard')
            }catch(err){
                setFirebaseErr(err.message);
                console.log("auth err" ,err);
            }
        };

        if (isAuthenticated) {
            return <Redirect to="/dashboard" />;
        } else {
    return (
        <div  className="auth-form">
           <form onSubmit={handleSubmit}>
               <label htmlFor="email">Email</label>
               <input 
               type="email" 
               name="email"
               required
                value={values.email || ""}
                autoComplete="off"
                placeholder="your email address"
                onChange={ handleChange}
                onBlur={ handleBlur}
                />
             
            { errors.email&&<p className="error-text">{errors.email}</p>  }
            
            { firebaseErr &&   <p className="error-text">{firebaseErr}</p>}

            <label htmlFor="password">Password</label>
               <input 
               type="password" 
               name="password"
               required
                value={values.password || ""}
                autoComplete="off"
                placeholder="your password"
                onChange={handleChange}
                onBlur={ handleBlur}
                />
                
                { errors.password && <p className="error-text">{errors.password}</p>}
               
                { (!state.isAuthenticated && state.msg) && <p className="error-text">{state.msg}</p>}
                
                <button 
                type="submit"
                disabled={isSubmit}>
                    submit</button>

        <Link to="/register">Go back to Register</Link>
            </form> 
        </div>
    )
}
}

export default Login;