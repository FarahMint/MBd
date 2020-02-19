import React , {useContext} from 'react';

import Routes from "./routes"
import Header from"./components/Header";
import Footer from"./components/Footer";
 
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
      <div className="content">
      <Header/>
      {  notificationMsg }
      {/* <Search/> */}
  
        <Routes 
         />
      </div>
 
     <Footer/> 
    </div>
  );
}
 
export default App;
