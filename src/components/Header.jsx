import React from 'react';
import { Link } from "react-router-dom";


/** COMPONENTS */
import Search from"./Search";


export default function Header() {

    return (
        <header>
           <div className="content">
                <Link to="/"><h1>M</h1></Link>       
            <Search/>
           </div>
        </header>
    )
}
