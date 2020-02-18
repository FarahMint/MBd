import {LOGIN_REQUEST,  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./types";


const initState ={
    isLoggingIn: false,
    isLoggingOut: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    msg: "",
    user: {}
}

export const  firebaseAuth= (state=initState, action)=>{
    switch(action.type){
        /** User is trying to login: 
         * - user is logging in. 
         * - clear any errors that may have previously occurred. */
        case LOGIN_REQUEST:
          // console.log("login request", state)
        return {
            ...state,
            isLoggingIn: true,
            loginError: false
        };

        /** Successful login occurs:
         * - user is no longer trying to log,
         * - user is now authenticated, 
         * - store user data from action passes. */
        case LOGIN_SUCCESS:
          // console.log("login success", state)
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.payload
      };


      /** Login failure occurs:
       * - user is no longer trying to log in, 
       * - no user is authenticated.
       * - a failure has occurred.
       */
      case LOGIN_FAILURE:
        // console.log("login failure", state)
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        msg: action.payload
      };


        /** User is trying to logout:
       * - user is logging out. 
       * - clear any errors that may have previously occurred.
       */
      case LOGOUT_REQUEST:
        // console.log("logout request", state)
        return {
          ...state,
          isLoggingOut: true,
          logoutError: false
        };


    /** Successful logout occurs:
         * - user is no longer trying to log out,
         * - user is no longe authenticated, 
         * - clear user data from store */
      case LOGOUT_SUCCESS:
        // console.log("logout success", state)
        return {
          ...state,
          isLoggingOut: false,
          isAuthenticated: false,
          user: {}
        };


    /** Logout failure occurs:
       * - user is no longer trying to log out, 
       * - a failure has occurred.
       */
      case LOGOUT_FAILURE:
        // console.log("logout fail", state)
        return {
          ...state,
          isLoggingOut: false,
          logoutError: true
        };


    default:
        return state;
    }
}