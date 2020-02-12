import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from"./components/Header";
import Search from"./components/Search";
import MoviesList from"./components/MoviesList";
import CategoriesListMovies from"./components/CategoriesListMovies";
 import SelectedMovie from"./components/SelectedMovie";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Search />

        <Switch>
          <Route exact path='/' component={MoviesList} />
          <Route exact path='/:category' component={CategoriesListMovies} />
          <Route exact path='/selection/:id' component={SelectedMovie} />
        </Switch>
      </Router>


   

    </div>
  );
}

export default App;
