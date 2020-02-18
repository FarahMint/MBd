import React , {useContext} from 'react';

import Routes from "./routes"
import Header from"./components/Header";
// import Search from"./components/Search";
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
      {  notificationMsg }
      {/* <Search/> */}
  
        <Routes 
         />
 
      
    </div>
  );
}
 
export default App;
