import React, { Component } from "react";

const SignIn = ({ inputText, setInputText, users, setUsers, setStatus }) => {
  //two methods
  //set props as the argument-access it in the function below with 'props.setInputText'
  //OR
  //destructure-use curly brackets, take setInputText out of props

  const inputTextHandler = (event) => {
    console.log("Contains a target", event);
    console.log("Contains a value", event.target);
    console.log("input text:", event.target.value);
    //how can we set state based on the input text?
    setInputText(event.target.value);
    //set state as the eventargetvalue of the input div
  };

  return <div></div>;
};
export default SignIn;
