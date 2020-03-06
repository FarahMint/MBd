import React , {useContext} from 'react';

import { Link } from "react-router-dom";
/**IMPORT CONTEXT */
import { MoviesContext } from "../store/movies";



export default function Categories() {
    const {state } = useContext(MoviesContext);
    const {genres}=state;
    const urlimg=`http://image.tmdb.org/t/p/w185/`;
    const fallbackImg= `https://via.placeholder.com/185x278?text=Image+Not+Available`;


   const catalog =genres && genres.map(item =>{
       let data;
           let img =  item.list.map(movie => movie.poster_path);    
           data= {
                   name:item.name,
                   num: item.list.length,
                   img:img[img.length-2]
           };
       return data;
   });

   let displayCatalog = catalog && catalog.filter(item =>item.num> 0);
  
    return (

        <section className="moviesList-container catalog">
        {
            displayCatalog  && displayCatalog.map(item =>(
               <div key={item.name}>     
                <h3>{item.name}</h3>
                <img
                src={ item.img ? `${urlimg}${item.img}` : fallbackImg }
                alt={item.name}
                  />
                  <Link to={`/${item.name}`}className="btn-primary movie-link">
                  <span>{item.num} movies available</span>
                  </Link>
                  </div> 
                  ))
            }
            </section>
        
    )
}
