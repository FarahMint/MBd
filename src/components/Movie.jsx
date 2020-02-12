import React from 'react';
 import { Link } from "react-router-dom";
 import { FaBookmark} from "react-icons/fa";


export default function Movie({movie}) {
    const urlimg=`http://image.tmdb.org/t/p/w185/`;

    const shorten=(str,  separator = ' ')=>{
        let maxLen= 14;
        if (!str || str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
      }
    
      let imgDisplay = movie.poster_path ? `${urlimg}${movie.poster_path}` : null;
    return (
        <div>
        
                      
             <img
              src={imgDisplay}
                  alt={movie.title}
                />
                <FaBookmark/>
                <h3>{shorten(movie.title)}</h3>
                <Link to={`/selection/${movie.id}`} className="btn-primary movie-link">
                more info
                </Link>
        </div>
    )
}
