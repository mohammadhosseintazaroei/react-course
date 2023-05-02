import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import LoadingUser from "./loading/loadingUser";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    async function fetchUser() {
      await axios
        .get(`http://localhost:8000/admin/users/${id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE`,
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
    
          </div>
        )}
      </div>
    </>
  );
}
