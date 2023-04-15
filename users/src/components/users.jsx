import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/admin/users/all", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE`,
      },
    });
    console.log(res.data.data)
this.setState({users:res.data.data.Users})
}
  render() {
    return (
      <>
        <button className="btn btn-lg btn-primary" onClick={this.handleCreate}>
          create
        </button>
        <div className="row">
          {this.state.users.map((user) => {
            return (
              <div className="col-4 text-center p-5">
                <img
                  src={user.avatarURL}
                  style={{ borderRadius: "50%", width: "100px" }}
                />
                <h4>
                  {user.first_name} {user.last_name}
                </h4>
                <h5>{user.mobile}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      className="btn btn-info btn-sm"
                      onClick={this.handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  handleCreate = () => {};
  handleUpdate = (user) => {};
  handleDelete = (user) => {};
}

export default Users;
