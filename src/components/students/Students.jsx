import React from 'react'
import { StudentList } from './StudentList'

export const Students = (props) => {
  var student = {
    id:1,
    name:"rahul",
    age:23
  }
  return (
    <div>
      <h2>TITLE From App= {props.title}</h2>
      <h1>Students</h1>
      
      <StudentList student = {student} title ={props.title}></StudentList>
    </div>
  )
}
