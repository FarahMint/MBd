import React , { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
 
/** ICONS */
import {MdDashboard} from "react-icons/md";
import { FaUser ,FaSignOutAlt} from "react-icons/fa"

/** CONTEXT */
 import {Auth} from "../store/auth"
import { MoviesContext } from '../store/movies';
 

export default function LoggedUser() {
    const { state, onLogout}= useContext(Auth);
    const { state:{ bookmarked}}= useContext(MoviesContext);

    const history = useHistory();

    const handleLogOut = async()=>{
        try{
        await onLogout();
        history.push('/')
        }catch(e){
            console.log(e);
        }
    }

    const login =  
    <li  className="nav-item">
    <Link to="/login" className="nav-link">
       <FaUser aria-label="login" title="login"/>
        <span className="link-text">login</span> 
    </Link>
    </li>
  

   
    const dashboard =  
    <>
        <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
                <MdDashboard aria-label="dashboard" title="dashboard"/>
                <span className="link-text">dashboard</span> 
                    { (bookmarked&&  bookmarked.length > 0 )? 
                    <span className="badge"> {bookmarked.length}</span>  : null } 
            </Link>
        </li>
        <li className="nav-item">
        <span className="nav-link">
            <button type="button" onClick= {handleLogOut} >
                <FaSignOutAlt aria-label="logout" title="logout"/>
            </button>
            <span className="link-text">logout</span> 
            </span> 
        </li>  
    </>

    let nav = !state.isAuthenticated ? login  : dashboard;
  
    
    return (
            // <li className="nav-item nav-user-active">{ nav}</li>
                <> {nav}</>
    )
}
