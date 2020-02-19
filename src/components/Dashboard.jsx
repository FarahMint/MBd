import React, {useContext} from 'react';

/** ROUTER */
import { Link
    // , Redirect
 } from "react-router-dom";

import { FaTrash} from "react-icons/fa";

/** COMPONENTS */
// import Movie from "./Movie";

/** CONTEXT */
import {Auth} from "../store/auth";
import { MoviesContext} from "../store/movies"


export default function Dashboard() {

    const {state }= useContext(Auth);
    const {state:{bookmarked}, removeBookmarkedMovie} = useContext(MoviesContext);
   
    const user = state.user ? state.user : null;

    const formatedName = user.slice(0,user.indexOf("@"));
     
    return (
        
        <section className="dashboard-container">
        {/* {!state.isAuthenticated && <Redirect to="/login"/> } */}
        
    <h3>welcome {formatedName}</h3>
        <p>you are logged in with {user }</p>

        <div className="moviesList-container">
        {bookmarked && bookmarked.map(movie =>(
            <div key={movie.id}>
                <img src={movie.img} alt={movie.title}/>
                <Link 
                to={`/selection/${movie.idDB}`} className="btn-primary movie-link">
                <h3>{movie.title}</h3>
                </Link>

                <button 
                onClick={()=>removeBookmarkedMovie(movie.id)}
                className="icon-remove">
                    <FaTrash
                   
                     arial-label="remove bookmark"
                     title="remove bookmark"/>
                    </button>
            </div>
        ))}
       
        </div>
        </section>
    )
}
