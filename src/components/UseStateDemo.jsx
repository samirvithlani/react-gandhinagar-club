import React, { useState } from 'react'

export const UseStateDemo = () => {

    //var count =0;
    //count --> variable
    //setCount --> function, use: to update the value of count
    //useState(0) --> initial value of count
    const [count,setCount] = useState(0)
    //const [user, setuser] = useState({})
    //const [name, setname] = useState("")
    //const [isActive, setisActive] = useState(false)
    //const [list, setlist] = useState([])

    function increseCount(){
        //count++;
        setCount(count+1);
        console.log(count);
    }

  return (
    <div>
        <h1>useState Demo</h1>
        <h2>COUNT = {count}</h2>
        <button onClick={()=>{increseCount()}}>Increase Count</button>
        {/* <button onClick={increseCount}>Increase Count</button> */}
    </div>
  )
}
