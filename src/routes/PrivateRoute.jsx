import React, {useContext} from 'react';

import { Redirect, Route} from 'react-router-dom';
import {Auth} from "../store/auth"

/* Which component to render if a user is authenticated
    - func take arg:component & the rest of the props
    -> private route will be a wrapper around the regular Route
    - it passes the rest of the props { ...rest }
    - route render func that accepts func with rendering logic 
        - if we have user: 
            - render our route component 
            - or if no user render redirect 
*/

export default function PrivateRoute({component: RouteComponent, ...rest}) {
    const {state}= useContext(Auth);
    const { isAuthenticated } = state; 

 return(
        <Route
        {...rest}
        render={ props =>
        isAuthenticated ?
         <RouteComponent {...props}/> 
         : 
         <Redirect to="/login"/> } 
         />)
    }

