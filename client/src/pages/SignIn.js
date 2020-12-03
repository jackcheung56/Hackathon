import React, { Component } from "react";
import Nav from "../components/Nav";

const { email, password } = this.state;
return (
  <div className="signin">
    <Nav />
    <form className="login" onSubmit={this.handleSubmit}>
      <Input
        placeholder="email"
        name="email"
        type="email"
        value={email}
        onChange={this.HandleChange}
      />
      <Input
        placeholder="password"
        name="password"
        type="password"
        value={password}
        onChange={this.HandleChange}
      />
      <button>Login</button>
    </form>
  </div>
);
