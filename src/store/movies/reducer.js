import {  
    GET_ALL_MOVIES , 
    GET_MOVIES_SELECTED ,
    GET_GENRES_MOVIES,
    GET_QUERY,
    GET_MOVIES_GENRES_SELECTED,
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
    QUERY_INPUT,
    GET_BOOKMARK,
    GET_NOTIFICATION,
} from "./types";
  
    
  const initState={
    query:"",
    moviesList:[],
    selected:{},
    genres:[],
    selectedGenres:[],
    bookmarked:[],
    notif:{ show:false}
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
          return{
            ...state,
            selectedGenres: action.payload
          }
        case  ADD_BOOKMARK:
            // console.log("add b", action.payload)
          return{
            ...state,
           
          }
        case  REMOVE_BOOKMARK:
            // console.log("REMOVE b", action.payload);
            const bookmarked =  state.bookmarked.filter(item => item.id !== action.payload)
          return{
            ...state,
            bookmarked: bookmarked,
          }
        case  GET_BOOKMARK:
          // console.log("get b", action.payload)
          return{
            ...state,
            bookmarked: action.payload
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
          case  GET_NOTIFICATION:       
            return {
                ...state,
                notif: action.payload
            }
      default:
        return state;
    }
  }
  
  export { movieReducer };