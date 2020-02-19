import React , { useContext } from 'react';
import { Link } from "react-router-dom";

/** ICONS */
import {MdDashboard} from "react-icons/md";
import { FaUser ,FaSignOutAlt} from "react-icons/fa"

/** COMPONENTS */
import ToggleMenuSm from "./ToggleMenuSm";
import ListOfGenres from "./ListOfGenres";
import Search from"./Search";


/** CONTEXT */
 import {Auth} from "../store/auth"
import { MoviesContext } from '../store/movies';
 

export default function Header(props) {
    const { state, onLogout}= useContext(Auth);
    const {sideDrawer, toggleNavHandler, state:{ bookmarked}}= useContext(MoviesContext);

    const handleLogOut = async()=>{
        try{
        await onLogout();
        //  props.history.push('/');
        }catch(e){
            console.log(e);
        }
    }

    const login =  <Link to="/login">
    <button type="button"><FaUser aria-label="login" title="login"/></button> </Link>

   
    const dashboard =  
    <div>
        <Link to="/dashboard">
        <button type="button">
       

            <MdDashboard
            aria-label="dashboard" title="dashboard"/>
             { (bookmarked&&  bookmarked.length > 0 )? 
            <span className="badge">{bookmarked.length}</span>  : null
            }
            </button> 
           
            </Link>
        <button type="button" onClick= {handleLogOut}>
            <FaSignOutAlt
            aria-label="logout" title="logout"/>
            </button>
    </div>

    let nav = !state.isAuthenticated ? login  : dashboard;
  
    
    return (
        <header>
           <div className="content">
                <Link to="/"><h1>M</h1></Link>
                <div className="nav-user-active">{ nav}</div>
                <ToggleMenuSm 
                    sideDrawer={sideDrawer}
                    toggleNavHandler ={toggleNavHandler }/>
           </div>
         

            <ListOfGenres
                sideDrawer={sideDrawer}
                toggleNavHandler ={toggleNavHandler} />
            <div>
             <Search/>
            </div>
        </header>
    )
}
