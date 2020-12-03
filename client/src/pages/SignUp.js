import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom'
import { __CreateUser } from '../services/UserService'

function SignUp({ setUsers, users, email, password, setEmail, setPassword }) {


  console.log('DOES IT WORK', users)
  console.log(email)
  console.log(password)


  const emailHandler = (event) => {
    console.log('Contains a target', event)
    console.log('Contains a value', event.target)
    console.log('input text:', event.target.value)


    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    console.log('Contains a target', event)
    console.log('Contains a value', event.target)
    console.log('input text:', event.target.value)

    
    setPassword(event.target.value)
  }



  const submitUser = (event) => {

    event.preventDefault()
    setUsers([
      {
        email: {email},
        password: {password},
      }
    ])
  }













  return (
    <form>
      <div className="list">
        {/* <input value={inputText} onChange= {inputTextHandler} type="text"> */}
        <input value={email} onChange={emailHandler} type="text"></input>
        <input value={password} onChange={passwordHandler} type="text"></input>
        <button onClick={submitUser}><Link to="/signin">Sign Up</Link></button>
        
      </div>
    </form>
  );
}

export default SignUp;
