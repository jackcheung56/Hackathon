import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom'

function SignUp() {
    return (
      <form>
        <div className="list">
            {/* <input value={inputText} onChange= {inputTextHandler} type="text"> */}
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <button><Link to="/signin">Sign Up</Link></button>
        </div>
      </form>
    );
}

export default SignUp;
