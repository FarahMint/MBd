import React , {useState} from 'react';
import { Link } from "react-router-dom";
import ToggleMenuSm from "./ToggleMenuSm";
import ListOfGenres from "./ListOfGenres"


export default function Header() {

    const [sideDrawer , setSideDrawer]= useState();
    // *********** NAVBAR ***********
    const toggleNavHandler = () => setSideDrawer(!sideDrawer );


  
    return (
        <header   
        className="App-header">
            <Link to="/">
                <h1>M</h1>
            </Link>

            <ToggleMenuSm 
            sideDrawer={sideDrawer}
            toggleNavHandler ={toggleNavHandler }/>

            <ListOfGenres
                sideDrawer={sideDrawer}
                toggleNavHandler ={toggleNavHandler} />
        </header>
    )
}
