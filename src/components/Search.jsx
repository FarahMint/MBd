import React , {useContext, useState} from 'react';
import {
  withRouter
} from 'react-router-dom'
import { MoviesContext } from "../store/movies";
import { FaSearch} from "react-icons/fa";

 function Search(props) {

    const { userSearch } = useContext(MoviesContext);
    const [input, setInput] = useState("");

      // check input to enable btn
    const disabled = !input.length;
 


       const handleSubmit = (e) => {
        e.preventDefault(); 
        
        userSearch(input);
        props.history.push(`/`);
        setInput("");
         };
 
    return (
        <section className="searchbox-container"> 

            <form className="form-group" 
        onSubmit={handleSubmit} >
         
          <label htmlFor="search" hidden>Search</label>
          <input 
        type="text"
        name="search"
        className="searchbox"
        placehoder="search movies, actors..."
        value={input}
        onChange={(e)=>   setInput(e.target.value)}
     onSubmit={handleSubmit}
        />
        

          <button 
          className="search__btn" 
          type="submit" 
          disabled={disabled}
          >
            < FaSearch className="icon-search"/>
          </button>

        </form>  
      
        </section>
    )
}

export default withRouter(Search);
