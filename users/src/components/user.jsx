import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import LoadingUser from "./loading/loadingUser";
export default function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      await axios
        .get(`http://localhost:8000/admin/users/${id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTQ0ODg4ODg4OCIsImlhdCI6MTY4MzI4NjUxNiwiZXhwIjoxNjg1ODc4NTE2fQ.iuAtOec7Sqg1TYGkZCprwpYiL_muJ5e4fDAvPMDpaNo`,
          },
        })
        .then((res) => {
          console.log(res);
          setUser(res.data.data.user);

          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchUser();
  }, []);

  return (
    <>
      <h1>user</h1>
      {console.log(user)}
      <div className="row">
        {isLoading ? (
          <LoadingUser />
        ) : (
          <div className="col text-center p-5" key={user._id}>
            <img
              src={user.avatarURL ? user.avatarURL : avatar}
              style={{ borderRadius: "50%", width: "100px" }}
            />

            <div>{user.id}</div>
            <h5>{user.mobile}</h5>
            <h5>{user.email}</h5>
            <h5>{user.username}</h5>
            <button
        onClick={() => {
          navigate("/users");
        }}
        className="btn btn-info mt-3"
      >
        users
      </button>
          </div>

        )}
      </div>

    </>
  );
}
