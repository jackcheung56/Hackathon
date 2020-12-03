import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Netflux</h1>
      <ul className="nav-links">
        <Link to="/signin">
          <li>Login</li>
        </Link>

        <Link to="/logout">
          <li>Logout</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

//notes for team:
//import link, wrap it around li elements
//add "to" with corresponding url paths from the app.js file
