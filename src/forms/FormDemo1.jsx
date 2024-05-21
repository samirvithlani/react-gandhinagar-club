import React, { useState } from 'react'

export const FormDemo1 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [gender, setgender] = useState("")
    const submitHandler = () => {

            alert("Name: "+name+" Email: "+email + "Gender:" +gender)
    }
    const nameHanlder = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type="text" onChange={(event)=>{nameHanlder(event)}}></input>
            {name}
        </div>
        <div>
            <label>EMAIL</label>
            <input type="text" onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type="radio" name="gender" value="male" 
            onChange={(event)=>{setgender(event.target.value)}}></input> <br></br>
            FEMALE : <input type="radio" name="gender" value="female" 
            onChange={(event)=>{setgender(event.target.value)}}></input> <br></br>  
            {gender}
        </div>
        <div>
            <button onClick={()=>submitHandler()}>SUBMIT</button>
        </div>
    </div>
  )
}
