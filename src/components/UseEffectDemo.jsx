import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //useEffect is lifecycle method
    //1st parameter-->function
    //2nd parameter-->array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called");
    },[count])
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>Click me</button>
        <h1>{count}</h1>
    </div>
  )
}
