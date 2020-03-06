import React, {useContext} from 'react'
import { Switch, Route} from 'react-router-dom';

/** COMPONENTS */
import MoviesList from '../components/MoviesList';
import CategoriesListMovies from "../components/CategoriesListMovies";
import Categories from "../components/Categories";
 import SelectedMovie from "../components/SelectedMovie";
 import Login from "../components/Login";
 import Register from "../components/Register";
 import Dashboard from "../components/Dashboard";
 import PrivateRoute from "./PrivateRoute";

/** CONTEXT */
import {Auth} from "../store/auth"

const Routes = ()=>{
  

    const { state }= useContext(Auth);
    const { isAuthenticated } = state;
return (
    <Switch>

          <Route exact path='/' component={MoviesList} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <PrivateRoute 
            exact 
            path='/dashboard' 
            component={Dashboard}
            isAuthenticated={isAuthenticated}
            />
       
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/:category' component={CategoriesListMovies} />
          <Route exact path='/selection/:id' component={SelectedMovie} />
        </Switch>
)
}

export default Routes;

 