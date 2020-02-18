import React
// , {useContext}
 from 'react';
 import { Link } from "react-router-dom";

 import BtnAddBookmark from "./BtnAddBookmark";

 /** CONTEXT */
//  import { MoviesContext} from "../store/movies"
 

export default function Movie({movie, bookmarked}) {

  // const { bookmarkMovie }= useContext(MoviesContext);
    const urlimg=`http://image.tmdb.org/t/p/w185/`;

    const shorten=(str,  separator = ' ')=>{
        let maxLen= 14;
        if (!str || str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
      }

     const flagBmark = bookmarked && bookmarked.length > 0 && bookmarked.some(item => item.idDB === movie.id);

    return (
        <div>
        
                      
             <img
              src={ movie.poster_path ? `${urlimg}${movie.poster_path}` : null}
              alt={movie.title}
                />
                 
   
                <h3>{shorten(movie.title)}</h3>
                <Link to={`/selection/${movie.id}`} className="btn-primary movie-link">
                more info
                </Link>

                <BtnAddBookmark
                  movie ={movie}
                  flagBmark={flagBmark}/>
        </div>
    )
}
