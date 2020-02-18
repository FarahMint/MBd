import React, {useReducer, useEffect, useState, createContext,useContext} 
from 'react';

import {
  // useLocation,
   useHistory
} from 'react-router'

/** CONTEXT AUTH */
import {Auth} from "../auth"

/**FIREBASE */
import firebase from "../../firebaseDB/firebase";
 
import {  
    GET_ALL_MOVIES , 
    GET_GENRES_MOVIES , 
    GET_MOVIES_GENRES_SELECTED,
    GET_MOVIES_SELECTED ,
    GET_QUERY,
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
    GET_BOOKMARK,
    QUERY_INPUT,
    GET_NOTIFICATION
} from "./types";


/** API */
import { searchMovie , grabAll, grabSelectedMovie, allGenres} from "../../Api";

 
import { movieReducer } from "./reducer";
 
export const MoviesContext=  createContext();

const MoviesContextProvider =(props)=>{  

  const urlimg=`http://image.tmdb.org/t/p/w185/`;

  // *********** AUTH CONTEXT ***********
  const { state:{user} }= useContext(Auth);
    
  // *********** ROUTER ***********
  // const location = useLocation();
  const history = useHistory();

  
  // *********** NAVBAR ***********
  const [sideDrawer , setSideDrawer]= useState(false);
  const toggleNavHandler = () => setSideDrawer(!sideDrawer );
  
  // *********** LOCAL STORE ***********
  const localState = JSON.parse(localStorage.getItem("state"));
  
  // *********** REDUCER ***********
  const [state, dispatch] = useReducer(movieReducer, localState || {});




// *********** FUNCTIONS ***********

  //SEARCH
  const userSearch = async (search ) =>{
    dispatch({type: QUERY_INPUT, payload: search});
      try{
        const response = await searchMovie(search);

        if(response.length === 0 ||response === []){
          let msg = { 
            status:"info", 
            text: "sorry no movie found",
            show: true}
      
          handleAlert(msg);
         return getData();
        }
        dispatch({
          type: GET_QUERY,
          payload:response
        });
      }catch(e){
        console.log(e);
      }
    }
  
   // MOVIE SELECTED
  const selectedMovieData = async (id ) =>{
    try{
      const data =  await grabSelectedMovie(id);
      dispatch({type: GET_MOVIES_SELECTED, payload: data});
      }
      catch(e){
        console.log(e)
      }
    }

// GET ALL DATA 
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

  // MATCH GENRE 
    const matchGenre = (id)=>{
     let matchToGenre = state.moviesList.filter(movie => movie.genre_ids.includes(id)); 

        if (matchToGenre === [] || matchToGenre.lenght === 0) {
            return;
          } 
    dispatch({type:GET_MOVIES_GENRES_SELECTED, payload: matchToGenre });
 }

   // BOOKMARK MOVIE
 const bookmarkMovie =async (movie) =>{
  const db= firebase.firestore();
 
  if (user === undefined){
    let msg = { 
      status:"success", 
      text: "please login to create a watchlist",
      show: true}

    handleAlert(msg);
    return history.push("/login");
    
  }
  try{
    await  db.collection("bookmark").add({
      user: user,
      title: movie.title,
      img: `${urlimg}${movie.poster_path}`,
      genre_ids: movie.genre_ids || movie.genres,
      idDB: movie.id,
      vote_average: movie.vote_average,
      release_date:  movie.release_date,
      overview: movie.overview
      });

      let msg = { 
        status:"success", 
        text: "Movie added to watchlist",
        show: true
      };

  dispatch({type:ADD_BOOKMARK, payload:movie  });

  handleAlert(msg);

  }catch(e){console.log(e)}

};



  // DELETE BOOKMARK
  const removeBookmarkedMovie = async (id) => {
    const db= firebase.firestore();
      /*
      1) make async call to db
      2) get project by id from DB & delete doc
      3) dispatch action */
      try{
        await  db.collection('bookmark').doc(id).delete();
        let msg = { 
          status:"success", 
          text: "Movie removed from watchlist",
          show: true}
  
   
    dispatch({type:REMOVE_BOOKMARK, payload:id  });
  
    handleAlert(msg) 

      }catch(e){
        let msg = { 
          status:"danger", 
          text: e,
          show: true}

        console.log(e)
        handleAlert(msg)
      }
 }

 useEffect(()=>{
   // *********** CONNECT TO FB***********
  const db= firebase.firestore();
  let newBookmark;

  const getBmark = ()=>{
    db.collection("bookmark")
        .onSnapshot(  snapshot => {
                newBookmark =  snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
                })
            );   
            dispatch({type:GET_BOOKMARK , payload: newBookmark });
        })
    }

  getData();
  getBmark();
}, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
}, [state]);


  // NOTIF HELP FUNCTION
  const handleAlert = (msg)=>{ 
    dispatch({type:GET_NOTIFICATION, payload:msg  })
    setTimeout(()=> dispatch({type:GET_NOTIFICATION, payload:{}}), 3000)
  
  };



    return(
        <MoviesContext.Provider  value={{
          state,
          dispatch,
          alert,
          selectedMovieData,
          userSearch,
          matchGenre ,
          bookmarkMovie,
          removeBookmarkedMovie,
          sideDrawer,
          toggleNavHandler
    
   }}>
           {props.children}
        </MoviesContext.Provider >
    );
}
export default MoviesContextProvider;