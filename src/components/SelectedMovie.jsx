import React, {useContext, useEffect}  from 'react'; 
import { FaStar} from "react-icons/fa";

/**IMPORT CONTEXT */
import { MoviesContext } from "../store";


// selectedMovieData
export default function SelectedMovie(props) {
    const urlimg=`http://image.tmdb.org/t/p/w185/`;

    const id = props.match.params.id;
    const {state , selectedMovieData } = useContext(MoviesContext);
    const {selected}  = state;

    const formatDate = selected && selected.release_date.slice(0,4)
   
 
    // const formatStringGenre  = selected && selected.genres.reduce((acc, curr) => {
    //     let f = acc  + curr.name + ", ";
     
    //     return f;
    // }, "");

    const formatStringGenre  = selected && selected.genres.map(item => item.name ).join(', ');
    
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
            <p>no selection </p>
        :


        <>
            <div className="title_wrapper">
                <div>
                <h3>{selected.title}</h3><span>({formatDate})</span>
            <p>
                <FaStar/>
                {selected.vote_average}</p>
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
                <div className="plot_summary_wrapper">
                    <div className="status-message">
                      <h4 className="status-message-heading">{selected.status}</h4>
                    </div>
                </div>
                <div className="plot_summary_wrapper">
                    <div className="plot_summary ">
                        <div className="summary_text">
                            <h4>{selected.tagline}</h4> 
                            <p>{selected.overview}</p> 
                        </div>
                    </div> 
                </div>  
                <div className="uc-add-wl-button uc-add-wl--not-in-wl uc-add-wl">
                <button>
                    <div className="ipc-button__text">Add to Watchlist || Added to Watchlist
                    </div>
                </button>     
            </div>  
            </div>
        </div> 
        </>   
        }
     </section>
    )
}
