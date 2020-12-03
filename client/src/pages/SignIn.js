import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom'

function SignIn(setUsers, users, email, password, setEmail, setPassword) {

  console.log('IF THIS WORKS WE ARE GOLDEN',users, email, password)



    return (
      <form>
        <div className="list">
            {/* <input value={inputText} onChange= {inputTextHandler} type="text"> */}
            <input type="text"></input>
            <input type="text"></input>
            <button><Link to="/profiles">Sign In</Link></button>
        </div>
      </form>
    );
}

export default SignIn;
