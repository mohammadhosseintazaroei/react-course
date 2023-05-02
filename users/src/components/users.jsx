import React, { Component } from "react";
import axios from "axios";
import avatar from "../assets/images/avatar.png";
import LoadingUsers from "./loading/loadingUsers";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/admin/users/all", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE`,
      },
    });
    this.setState({ users: res.data.data.Users, isLoading: false });
  }
  render() {
    return (
      <>
        <button className="btn btn-lg btn-primary" onClick={this.handleCreate}>
          create
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user) => {
              return (
                <div className="col-4 text-center p-5" key={user._id}>
                  <img
                    src={user.avatarURL ? user.avatarURL : avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                  />
                  <Link to={`/users/${user.id}`}>
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                  </Link>
                  <div>{user.id}</div>
                  <h5>{user.mobile}</h5>
                  <h5>{user.email}</h5>
                  <h5>{user.username}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.handleDelete(user);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handleCreate = async () => {
    const newUser = {
      first_name: "sara",
      last_name: "hosseini",
      mobile: `094485${Math.floor(Math.random() * 90000) + 10000}`,
      email: "mmFFFa@gmail.com",
    };
    const response = await axios.post(
      "http://localhost:8000/admin/users/add",
      newUser,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE",
        },
      }
    );
    this.setState({ users: [...this.state.users, newUser] });
  };
  handleUpdate = async (user) => {
    user.first_name = "updated";
    const response = await axios.patch(
      `http://localhost:8000/admin/users/update/${user.id}`,user,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE",
        },
      }
    );
    const updatedUsers = [...this.state.users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = { ...user };
    this.setState({ users: updatedUsers });
  };
  handleDelete = async (user) => {
    const response = await axios.delete(
      `http://localhost:8000/admin/users/remove/${user.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE",
        },
      }
    );
    const newUsers = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users: newUsers });
  };
}

export default Users;
