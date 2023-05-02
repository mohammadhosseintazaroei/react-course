import React, { Component } from "react";
import Users from "./components/users";
import Navabar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/logn";
import Register from "./components/register";
import User from "./components/user";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navabar />
        <div className="container mt-3">
          <Routes>
            <Route path="/users"  element={<Users/>} />
            <Route path="/users/:id"  element={<User/>} />
            <Route path="/login/:timestamp?"  element={<Login/>} />
            <Route path="/register"  element={<Register/>} />
            <Route path="/"  element={<Home/>} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
