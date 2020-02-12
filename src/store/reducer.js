import {  
    GET_ALL_MOVIES , 
    GET_MOVIES_SELECTED ,
    GET_GENRES_MOVIES,
    GET_QUERY,
    GET_MOVIES_GENRES_SELECTED,
    QUERY_INPUT,
} from "./types";
  
    
  const initState={
    query:"",
    moviesList:[],
    selected:{},
    genres:[],
    selectedGenres:[],
  }
  
  function movieReducer(state = initState, action) {
    switch (action.type) {
      case GET_ALL_MOVIES:
        return{
          ...state,
          moviesList: action.payload
        }
      
        case GET_MOVIES_SELECTED:
          return{
            ...state,
            selected: action.payload
          }
        case GET_GENRES_MOVIES:
          return{
            ...state,
            genres: action.payload
          }
        case GET_MOVIES_GENRES_SELECTED:
            // console.log(action.payload)
          return{
            ...state,
            selectedGenres: action.payload
          }
  
        case GET_QUERY:
          return{
            ...state,
            moviesList: action.payload, 
          }
          case QUERY_INPUT:         
            return {
                ...state,
              query: action.payload
            }
      default:
        return state;
    }
  }
  
  export { movieReducer };