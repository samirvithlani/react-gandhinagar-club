import React from "react";

export const StudentList = (props) => {
  console.log("student list...",props); //{title:}
  return (
    <div>
      <h1>StudentList</h1>
      <h1>Id = {props.student.id}</h1>
      <h2>Name = {props.student.name}</h2>
      <h3>Title from app/students = {props.title}</h3>
    </div>
  );
};
