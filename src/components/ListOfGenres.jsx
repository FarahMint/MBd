import React , {useContext, useState} from 'react';
 
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

/** ICONS */
import {  FaAngleDown, FaAngleUp} from "react-icons/fa"

/** CONTEXT*/
import { MoviesContext } from "../store/movies";


export default function ListOfGenres(props) {
  //ROUTES 
  const history = useHistory();

  //CONTEXT
  const {sideDrawer, state , matchGenre ,getData} = useContext(MoviesContext);
  const { genres }= state;

  const [isOpen, setIsOpen] = useState(false);

   const toggleList=()=> setIsOpen(!isOpen);

  //FUNCTIONS
  const genresInTheCatalog = genres && genres.filter( i =>  i.list && i.list.length > 0);

  const displayGenres = genresInTheCatalog && genresInTheCatalog.map(item => {
  return (
  <li 
          key={item.id}
          onClick={()=> matchGenre(item.id)}
        >
        <Link  to={`/${item.name}`}>
        {item.name}
        </Link>
         </li>
         
         )
  });


  const layoutGenres = isOpen ? displayGenres : null



  const handleNewRelease=()=>{
    getData();
    return history.push("/");
  }

    // CSS
    let drawerCss= "list-genres";
      if(sideDrawer){
        drawerCss="list-genres open";
      }
      

    return (
    <>  
      <div className={drawerCss}>
        <div className="dd-wrapper">
        <h3 onClick={()=>handleNewRelease()}>Recent release</h3>
 
         
          <h3 
          className="dd-header-title"
          onClick={() => toggleList()}> 
              <Link  to="/categories">
          Categories
        </Link>
            {isOpen
              ? <FaAngleUp/>
              : <FaAngleDown/>
            }
              </h3>
              <ul>
          {  genres === undefined || genres.length === 0 ? "loading...." : layoutGenres}
              </ul>
          </div>
        </div>
    </>
       
    )
}
