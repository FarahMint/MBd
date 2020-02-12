import React, {useContext}  from 'react'; 
import Movie from "./Movie";

/**IMPORT CONTEXT */
import { MoviesContext } from "../store";

export default function MoviesList() {

    const {state } = useContext(MoviesContext);

    const {moviesList} = state;

let displayAllMovies =moviesList && moviesList.map(item =>
        <Movie 
        key={item.id}  
        movie ={item}/>
        )  ;

     return (
        <section className="moviesList-container">
                {displayAllMovies}
        </section>
    )
 
}
