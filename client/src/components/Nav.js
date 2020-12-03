import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {

  return (
    <header class="navbar navbar-dark navbar-fixed-top" role="banner">
      <div class="container">
        <div class="navbar-header">
          <a href="" to="/">
            <span class="navbar-logo">Netflux</span>
          </a>
        </div>
        <nav class="collapse navbar-collapse" id="navbar-nav" role="navigation">
          <ul class="nav navbar-nav navbar-right nav-main">
            <li class="hidden">
              <a href="" to="/signin" id="nav-link-login">
                Login
              </a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="/" id="nav-link-sign-in">
                Log Out
              </a>
            </li>
          </ul>

export default Nav;

//notes for team:
//import link, wrap it around li elements
//add "to" with corresponding url paths from the app.js file
