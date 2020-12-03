import React from 'react'
import '../styles/Nav.css';

const Form = ({inputText, setInputText, users, setUsers} ) => {
    //two methods
    //set props as the argument-access it in the function below with 'props.setInputText'
    //OR
    //destructure-use curly brackets, take setInputText out of props
    console.log('USERS', users)

    const inputTextHandler = (event) => {
        console.log('Contains a target', event)
        console.log('Contains a value', event.target)
        console.log('input text:', event.target.value)
        //how can we set state based on the input text?
        setInputText(event.target.value)
        //set state as the eventargetvalue of the input div
    }

    const submitTodoHandler = (event) => {
        //...users means, if there are pre-existing things in the array, pass them along
        event.preventDefault()
        setUsers([
            // ...users,
            {email: inputText} 
        ])
        setInputText('')
        //reset text input to an empty string-updating state after submit
        //*** also need to add a value on line 39 so the value of the input is
        //set to be equal to the state of input text.
        //always use on change for inputs
    }



    return (
        <form>
            <div className="block">
                <input value={inputText} onChange= {inputTextHandler} type="text" className="user-input"></input>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">Get Started</button>
            </div>
        </form>

    )
}

export default Form