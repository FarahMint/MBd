import React from "react";
import { Link } from "react-router-dom";

/** ICONS */
import {FaThList, FaChevronRight} from "react-icons/fa"
import { MdLocalMovies  } from "react-icons/md"

/** COMPONENTS */
import LoggedUser from "./LoggedUser";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <div className="nav-item logo">
          <Link to="/" className="nav-link">
            <FaChevronRight/>
            <span className="link-text">M</span>
          </Link>
        </div>

        <LoggedUser/>

        <li className="nav-item">
          <Link to="/" className="nav-link">
                <MdLocalMovies/>
            <span className="link-text">new movies</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/categories" className="nav-link">
          <FaThList/>
            <span className="link-text">categories</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
