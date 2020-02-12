import React, {useReducer, useEffect, useState, createContext} 
from 'react';
 
import {  
    GET_ALL_MOVIES , 
    GET_GENRES_MOVIES , 
    GET_MOVIES_GENRES_SELECTED,
    GET_MOVIES_SELECTED ,
    GET_QUERY,
    QUERY_INPUT
} from "./types";



import { searchMovie , grabAll, grabSelectedMovie, allGenres} from "../Api";

 
import { movieReducer } from "./reducer";
 


export const MoviesContext=  createContext();

  const MoviesContextProvider =(props)=>{  
//   const [initialized, setInitialized] = useState(false);

  const [alert, setAlert] = useState({show:false});

  const localState = JSON.parse(localStorage.getItem("state"));

  const [state, dispatch] = useReducer(movieReducer, localState || {});


  const userSearch = async (search ) =>{
    console.log(search);
    dispatch({type: QUERY_INPUT, payload: search});
      try{
          const response = await searchMovie(search);

          console.log(response)
          dispatch({
            type: GET_QUERY,
            payload:response
          });
     
        }catch(e){
            console.log(e);
        }
  }
  
   

    const selectedMovieData = async (id ) =>{
        try{
          const data =  await grabSelectedMovie(id);
            dispatch({type: GET_MOVIES_SELECTED, payload: data});
        }
        catch(e){
            console.log(e)
        }
    }


    const  getData = async () => {
      try{
  
      const[moviesList,genres]= await Promise.all([grabAll(),allGenres()]);
   
      dispatch({type:  GET_ALL_MOVIES , payload: moviesList});

      let matchToGenre = genres.genres.map(item =>{

      let t = moviesList.filter(movie => 
      movie.genre_ids.includes(item.id));
      return {id:item.id ,name: item.name, list : t}
      });
      dispatch({type: GET_GENRES_MOVIES , payload: matchToGenre});

      }catch(e){
       console.log(e)
      }
    };



  
    useEffect(()=>{
      // async function getAll() {
      //   const  moviesList = await grabAll();
      //   dispatch({type:  GET_ALL_MOVIES , payload: moviesList});
      // }
      // getAll();
      getData();
    }, []);
  
    // useEffect(()=>{
    //   async function getGenres() {
    //     const {genres} = await allGenres();

    //     dispatch({type: GET_GENRES_MOVIES , payload: genres});
    //   }
    //   getGenres();
    // }, []);
  
  
    const matchGenre = (id)=>{

     let matchToGenre = state.moviesList.filter(movie => movie.genre_ids.includes(id)); 


        if (matchToGenre === [] || matchToGenre.lenght === 0) {
    handleAlert({ status:"danger", text: "sorry no movies were found"});
            return;
          } 


    dispatch({type:GET_MOVIES_GENRES_SELECTED, payload: matchToGenre });
 }


  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
}, [state]);

 

   //notification alert 
   const handleAlert = ({status, text})=>{
    setAlert({show: true,  status, text});
    setTimeout(()=> setAlert({show: false}), 3000)
  };


    return(
        <MoviesContext.Provider  value={{
          state,
          dispatch,
          alert,
          selectedMovieData,
          userSearch,
          matchGenre 
    
   }}>
           {props.children}
        </MoviesContext.Provider >
    );
}
export default MoviesContextProvider;