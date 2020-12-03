import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Nav.css';

function Nav() {



    return (
        <nav>
            <div className="navbox">
                <ul className="nav-links">

                    <Link to='/'>
                        <h1>Netflux</h1>
                    </Link>

                    <Link to='/signin'>
                        <li>Login</li>
                    </Link>

                    <Link to='/'>
                        <li>Logout</li>
                    </Link>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;


//notes for team: 
//import link, wrap it around li elements
//add "to" with corresponding url paths from the app.js file


