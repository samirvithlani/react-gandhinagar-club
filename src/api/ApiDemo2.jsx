import axios from "axios";
import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  //data register...

  const postApiDemo = async () => {
    const obj = {
      name: "akshit",
      email: "akshit@gmail.com",
      age: 24,
      isActive: "true",
    };

    const res = await axios.post("https://node5.onrender.com/user/user", obj);
    if (res.status === 201) {
      //   alert("Data Inserted Successfully")
      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1 style={{ color: "blue" }}>POST API DEMO</h1>
      <button
        onClick={() => {
          postApiDemo();
        }}
      >
        POST API
      </button>
    </div>
  );
};
