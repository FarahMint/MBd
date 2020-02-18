import React , {useContext} from 'react';
import { Link } from "react-router-dom";
import { MoviesContext } from "../store/movies";

export default function ListOfGenres(props) {

  const {sideDrawer, state , matchGenre } = useContext(MoviesContext);
  const { genres }= state;

  const genresInTheCatalog = genres && genres.filter( i =>  i.list && i.list.length > 0);

  const displayGenres = genresInTheCatalog && genresInTheCatalog.map(item => {
  return (<li 
          key={item.id}
          onClick={()=> matchGenre(item.id)}
        >
        <Link  to={`/${item.name}`}>
        {item.name}
        </Link>
         </li>)
  });

       let drawerCss= "list-genres";
    if(sideDrawer){
      drawerCss="list-genres open";
    }
      
    return (
    <>
        <ul className={drawerCss}
        >
      { genres === undefined || genres.length === 0 ? "loading...." : displayGenres}
          </ul>  
    </>
       
    )
}
