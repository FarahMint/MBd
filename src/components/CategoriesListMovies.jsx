import React , {useContext} from 'react';


import { MoviesContext } from "../store/movies";

import Movie from "./Movie";
// import Alert from "./Alert";

export default function CategoriesListMovies(props) {
    const {state } = useContext(MoviesContext);
    const {  selectedGenres }= state

    return (
        <section className="moviesList-container">
        {
            selectedGenres&& selectedGenres.map(item =>   <Movie 
            key={item.id}  
            movie ={item}/>
            )} 
            </section>
    )
}
