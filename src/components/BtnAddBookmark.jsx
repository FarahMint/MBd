import React, {useContext} from 'react';
import { FaBookmark} from "react-icons/fa";

 /** CONTEXT */
 import { MoviesContext} from "../store/movies"
 export default function BtnAddBookmark({movie, flagBmark}) {
    const { bookmarkMovie }= useContext(MoviesContext);

     const title = !flagBmark ? "Add to Watchlist": "Saved";
 
    return (
        <button 
        type="button"
        className={!flagBmark? "active bookmark" : "bookmark" }
        disabled={flagBmark}
        onClick={()=>bookmarkMovie(movie)}>
          
        <FaBookmark
        arial-label="bookmark"
        title={title}/> {title}
        </button>
    )
}
