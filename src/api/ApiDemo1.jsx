import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    let users = await axios.get("https://node5.onrender.com/user/user");
    console.log(users);
    //axios -->data object -->actual response data
    console.log(users.data.message);
    setmessage(users.data.message);
    console.log(users.data.data);
    setusers(users.data.data);
  };

  return (
    <div>
      <button
        onClick={() => {
          getUserData();
        }}
      >
        Get User Data
      </button>
      {/* {message}
      <ul>
        {users?.map((user) => {
          return (
            <li>
              {user._id} -- {user.name}
            </li>
          );
        })}
      </ul> */}

      <table className="table table-dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>EMAIL</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "Not Active"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
