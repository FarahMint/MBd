import React, {useContext, useEffect}  from 'react'; 
import { FaStar} from "react-icons/fa";
import BtnAddBookmark from "./BtnAddBookmark";

/**IMPORT CONTEXT */
import { MoviesContext } from "../store/movies";



export default function SelectedMovie(props) {
    const urlimg=`http://image.tmdb.org/t/p/w185/`;

    const id = props.match.params.id;
    const {state , selectedMovieData } = useContext(MoviesContext);
    const {selected, bookmarked}  = state;

    const formatDate = selected && selected.release_date.slice(0,4)
   
    const formatStringGenre  = selected && selected.genres.map(item => item.name ).join(', ');

    
    const flagBmark = (selected)=>{
        if(bookmarked.length > 0 && selected !== {}){

       let tag = bookmarked.some(item => item.idDB === selected.id)
       return tag;
        }
    };

    // const flagBmark = bookmarked && bookmarked.length > 0 && bookmarked.some(item => item.idDB === selected.id);

    
    const timeConvert= (num) =>{
       
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return  `${rhours}h ${rminutes}min`;
        }
        



    useEffect(()=>{
        selectedMovieData(id);
          // eslint-disable-next-line react-hooks/exhaustive-deps
         },[]);

         const dateFormatString = (str)=>{
            let dayNum = new Date(str).getDate();
            let fullMonth =new Date(str).toLocaleString('default', { month: 'long' });
            let fullYear = new Date(str).getUTCFullYear();

            return `${dayNum} ${fullMonth} ${fullYear}`;
         }
         
    return (
        <section>
            { !selected || selected === undefined ?
            <p>no selection </p> :
            <>
            <div className="title_wrapper">
                <div>
                    <h3>{selected.title}</h3><span>({formatDate})</span>
                    <p> <FaStar/>{selected.vote_average}</p>
                </div>
            
                <div>{timeConvert(selected.runtime)} | {formatStringGenre} |{dateFormatString(selected.release_date)}</div>
                </div>
                <br/>

              <div className="details">
                    <img
                src={`${urlimg}${selected.poster_path}`}
                alt={selected.title}
                /> 
             
                <div className="plot_summary">
                
                    <div className="status-message">
                      <h4 className="status-message-heading">{selected.status}</h4>
                        <BtnAddBookmark
                         movie ={selected}
                         flagBmark={flagBmark(selected)}/> 
                    </div>
               
                        <div className="plot_summary">
                            <h4>{selected.tagline}</h4> 
                            <p>{selected.overview}</p> 
                        </div>  
                </div>
            </div> 
        </>   
        }
     </section>
    )
}
