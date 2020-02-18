import React, {useContext}  from 'react'; 
import Movie from "./Movie";

/**IMPORT CONTEXT */
import { MoviesContext } from "../store/movies";

export default function MoviesList() {

    const {sideDrawer, state } = useContext(MoviesContext);
    const {moviesList, bookmarked} = state;

let displayAllMovies = moviesList && moviesList.map(item =>
        <Movie 
        key={item.id}  
        movie ={item}
        bookmarked={bookmarked}/>
        )  ;


       let drawerCss= "moviesList-container";
       if(sideDrawer){
         drawerCss="moviesList-container slide-left";
       }
 
     return (
        <section 
        // className="moviesList-container"
        className={drawerCss}
        >
                {displayAllMovies}
        </section>
    )
 
}
