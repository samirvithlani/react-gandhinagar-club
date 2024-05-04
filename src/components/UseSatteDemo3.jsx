import React, { useState } from 'react'

export const UseSatteDemo3 = () => {
    const [isMarried, setisMarried] = useState(false)
    const changeStatus = () =>{
        //setisMarried(true)
        setisMarried(!isMarried)
    }
  return (
    <div>
        <h1>useState Demo 3</h1>
        Married : 
        <h2>
            {
                isMarried=== true ? "Married" : "Not Married"
            }
        </h2>
        <button onClick={()=>{changeStatus()}}>change status</button>
    </div>
  )
}
