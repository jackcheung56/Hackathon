import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Form from "../pages/Form";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Profilelist from "../pages/ProfileList";
import Nav from './Nav'
import CreateProfile from "../pages/CreateProfile";
import ViewProfile from "../pages/ViewProfile";

function Router() {
    const [inputText, setInputText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState({})




    return (
        <div>
            <Nav></Nav>
            <Switch>




                <Route exact path='/signin'>
                    <SignIn

                        email={email}
                        setEmail={setEmail}

                        password={password}
                        setPassword={setPassword}


                        users={users}
                        setUsers={setUsers}


                    ></SignIn>
                </Route>




                <Route exact path='/signup'>
                    <SignUp

                        email={email}
                        setEmail={setEmail}

                        password={password}
                        setPassword={setPassword}


                        users={users}
                        setUsers={setUsers}
                    ></SignUp>
                </Route>




                <Route exact path='/'>
                    <Form
                        inputText={inputText}
                        setInputText={setInputText}
                        users={users}
                        setUsers={setUsers}
                    ></Form>
                </Route>


                <Route path="/profiles" component={Profilelist} />





            </Switch>
        </div>
    )
}





export default Router

// /signup/hello@hello.com

//NOTES ON STATE STRUCTURE

//input form exists on the homepage "/"
//we need to declare state in the router
//BECAUSE the state of that input form, is going to update on HOME
//and get passed as props to the sign up page. 




// inputText={inputText} 
// setInputText={setInputText} 
// todos={todos} 
// setTodos={setTodos}
// setStatus={setStatus}