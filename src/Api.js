const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovie =  async  searchTerm => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${searchTerm}`;

  try{
    const response = await fetch(url);
    const  {results} = await response.json();
   
    return results;
  }catch(e){
    console.log(e);
  }
};

export const grabAll = async () => {
const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}`;

  try{
    const response = await fetch(url);
    const  {results} = await response.json();
  // console.log(results);
    return results;
  }catch(e){
    console.log(e);
  }
};

export const allGenres = async () => {

  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`;
  
  try{
    const response = await fetch(url);
    const  results = await response.json();
  // console.log(results);
    return results;
  }catch(e){
    console.log(e);
  }
};


export const grabSelectedMovie = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}`;

  try{
    const request = await fetch(url);
    const result = await request.json()

    return result;
  }catch(e){
    console.log(e);
  }
};
