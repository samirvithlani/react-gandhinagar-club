import React, { useContext } from 'react'
import { AppContext } from './context'

export const Os11 = () => {
    const{compnayName,nameHandler} = useContext(AppContext)
  return (
    <div>Os11

        <h2 style={{color:"yellow"}}>{compnayName}</h2>
        <button onClick={()=>nameHandler("Google")}>Change Name</button>
    </div>
  )
}
