import React  , {useContext} 
from 'react';

import Routes from "./routes"
import Header from"./components/Header";
import Navbar from"./components/Navbar";
 

//import TestSlider from "./components/TestSlider"
import Notification from"./components/Notification";

/**IMPORT CONTEXT */
import { MoviesContext } from "./store/movies";


function App() {

  const {state } = useContext(MoviesContext);

  const {notif} = state;

 
  let notificationMsg = (notif && notif.show === true) &&  <Notification 
  status={notif.status}
   text={notif.text}
   
  />
  
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="content">

      {  notificationMsg }
   
        <Routes 
         />
      </div>    
    </div>
  );
}
 
export default App;
