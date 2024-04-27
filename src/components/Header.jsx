import React from "react";
import "../assets/css/header.css";

//component name always start capital letter
export const Header = (props) => {
  console.log("Headr component....", props); // {} props ={title:""}
  return (
    <div className="header">
      <h1>HEADER COMPONENT</h1>
      <h2>TITLE = {props.title}</h2>
      <h2 style={{ color: props.color }}>{props.color}</h2>
    </div>
  );
};
