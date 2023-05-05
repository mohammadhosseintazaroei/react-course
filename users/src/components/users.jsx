import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import LoadingUsers from "./loading/loadingUsers";
import queryString from "query-string"
export default function Users() {
  const { id } = useParams();
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const order = window.location.search;
  console.log(queryString.parse(order))


  useEffect(() => {
    async function fetchUsers() {
      await axios;
      await axios
        .get("http://localhost:8000/admin/users/all", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTQ0ODg4ODg4OCIsImlhdCI6MTY4MzI4NjUxNiwiZXhwIjoxNjg1ODc4NTE2fQ.iuAtOec7Sqg1TYGkZCprwpYiL_muJ5e4fDAvPMDpaNo`,
          },
        })
        .then((res) => {
          console.log(res);
          setUsers(res.data.data.Users);

          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchUsers();
  }, []);

  const handleCreate = async () => {
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTQ0ODg4ODg4OCIsImlhdCI6MTY4MzI4NjUxNiwiZXhwIjoxNjg1ODc4NTE2fQ.iuAtOec7Sqg1TYGkZCprwpYiL_muJ5e4fDAvPMDpaNo",
        },
      }
    );
    setUsers([...users, newUser]);
  };
  const handleUpdate = async (user) => {
    user.first_name = "updated";
    const response = await axios.patch(
      `http://localhost:8000/admin/users/update/${user.id}`,
      user,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTQ0ODg4ODg4OCIsImlhdCI6MTY4MzI4NjUxNiwiZXhwIjoxNjg1ODc4NTE2fQ.iuAtOec7Sqg1TYGkZCprwpYiL_muJ5e4fDAvPMDpaNo",
        },
      }
    );
    const updatedUsers = [...users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = { ...user };
    setUsers(updatedUsers);
  };
  const handleDelete = async (user) => {
    const response = await axios.delete(
      `http://localhost:8000/admin/users/remove/${user.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTQ0ODg4ODg4OCIsImlhdCI6MTY4MzI4NjUxNiwiZXhwIjoxNjg1ODc4NTE2fQ.iuAtOec7Sqg1TYGkZCprwpYiL_muJ5e4fDAvPMDpaNo",
        },
      }
    );
    const newUsers = users.filter((u) => u.id !== user.id);
    setUsers(newUsers);
  };
  return (
    <>
    {console.log(order)}
      <button className="btn btn-lg btn-primary" onClick={handleCreate}>
        create
      </button>
      <div className="row">
        {isLoading ? (
          <LoadingUsers />
        ) : (
          users.map((user) => {
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
                        handleUpdate(user);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        handleDelete(user);
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
