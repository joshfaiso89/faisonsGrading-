import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        Kenny Faison
        </nav>
        <br></br>
        <nav>
          <div className="inline">
          <span className="ml-5">
            <Link to="/">About</Link>
          </span>
          <br></br>
          <span className="ml-5">
            <Link to="/Contact">Contact</Link>
          </span>
          <br></br>
          <span className="ml-5">
            <Link to="#">Gallary</Link>
          </span>
          <br></br>
          </div>
        
      </nav>
    </div>
  );
}

export default MainNav;
