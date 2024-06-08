import axios from "axios";
import React, { useEffect, useState } from "react";
import { CutomeLoder } from "../components/CutomeLoder";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoding, setisLoding] = useState(false);

  const getUserData = async () => {
    setisLoding(true);
    let users = await axios.get("https://node5.onrender.com/user/user");
    console.log(users);
    //axios -->data object -->actual response data
    console.log(users.data.message);
    setmessage(users.data.message);
    console.log(users.data.data);
    setusers(users.data.data);
    setisLoding(false);
  };

  const deleteUser = async (id) => {
    //delete api ...

    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log(res);
    if (res.status === 204) {
      getUserData();
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {isLoding && <CutomeLoder />}
      {/* <button
        onClick={() => {
          getUserData();
        }}
      >
        Get User Data
      </button> */}
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
            <td>ACTION</td>
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
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
