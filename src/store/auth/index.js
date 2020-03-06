import React , {createContext, useReducer, useEffect} from 'react';

 

import {LOGIN_REQUEST,  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";

import firebase from "../../firebaseDB/firebase";
import {firebaseAuth} from "./reducer";


export const Auth = createContext();

const AuthContextProvider=(props) =>{
 
    const [state, dispatch]= useReducer(firebaseAuth,{});
    
    const auth = firebase.auth();

     /**REGISTER */
    const onRegister=async(email,password)=> {
        dispatch({type:LOGIN_REQUEST});
        try{
            let response=  await auth.createUserWithEmailAndPassword(email, password);
            dispatch({
                type: LOGIN_SUCCESS,
                payload:response.user.email
            });

        }catch(error){ 
            dispatch({
                type: LOGIN_FAILURE
            });
        }
    };

    /**LOGIN */
    const onLogin=async(email,password)=> {
        dispatch({type:LOGIN_REQUEST});
        try{
            let response=  await auth.signInWithEmailAndPassword(email, password);
            dispatch({
                type: LOGIN_SUCCESS,
                payload:response.user.email
            });
        }catch(error){ 
            // console.log(error);
            let msg= "no valid identifier"

            dispatch({
                type: LOGIN_FAILURE,
                payload:msg
            });
        }
    };
      
     /**LOGOUT */
    const onLogout = async() => {
      
    dispatch({type: LOGOUT_REQUEST});
        try{
       
            await auth.signOut();
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }catch(error){
            dispatch({
                type: LOGOUT_FAILURE
            });
      };
    }

    useEffect(()=>{
        return firebase.auth().onAuthStateChanged(
        (authUser) => {

            if(authUser !== null) {
            dispatch({ type: LOGIN_SUCCESS, payload: authUser.email });
            } 
        }
        );

  },[]);



    return <Auth.Provider value = {{
        state,
        onRegister,
        onLogin,
        onLogout,
        }}>
        {props.children}
    </Auth.Provider>

}
 export default AuthContextProvider;