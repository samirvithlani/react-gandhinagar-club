import React from 'react'

export const MapDemo = () => {
    var students  = [
        {
            id:1,
            name:"Raj",
        },
        {
            id:2,
            name:"Ravi",
        },
        {
            id:3,
            name:"Rahul",
        }
    ]
  return (
    <div>
        <h1>Map Demo</h1>
        <ul>
        {
            students.map((stu)=>{
                return(
                    <li>
                        <h1>Id = {stu.id}  Name = {stu.name}</h1>
                    </li>
                )
            })
        }
        
        </ul>
    </div>
  )
}
