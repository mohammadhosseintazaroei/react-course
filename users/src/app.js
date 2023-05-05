import React, { Component } from "react";
import Navabar from "./components/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/logn";
import Register from "./components/register";
import User from "./components/user";
import Users from "./components/users";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navabar />
        <div className="container mt-3">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/login/:timestamp?" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/customers" element={<Navigate to="/users" replace />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
