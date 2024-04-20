import React from "react";

export default function Content() {
  var name = "Sachin";
  console.log(name);
  var age = 24;
  var isActive = false;
  var user = {
    name: "Virat",
    age: 32,
  };

  const contentStyle = {
    backgroundColor: "grey",
    color: "white",
    padding: "10px",
    margin: "10px",

  }

  return (
    <div style={contentStyle}>
      <h1 style={{color:"blue"}}>CONTENT COMPONENT</h1>
      <h1>HELLO</h1>
      <h3>EVERY TAG MUST HAVE CLOSING TAG</h3>
      <h3>WE CAN RETURN ONLY SINGLE TAG</h3>
      <h4>
        WHATEVER WRITTEN IN RETURN STATMENT ONLY CAN DISPLAY TO BROWSER | CLIENT
      </h4>
      {name}
      <h1>NAME = {name}</h1>
      <h2>age = {age}</h2>
      <h3>isactive = {isActive == true ? "Active" : "Not active"}</h3>
      <h2>user name = {user.name}</h2>
      <h2>user age = {user.age}</h2>
    </div>
  );
}
