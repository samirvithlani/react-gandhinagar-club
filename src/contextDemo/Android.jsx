import React, { useContext } from 'react'
import { AppContext } from './context'
import { Os11 } from './Os11'

export const Android = () => {
    const {compnayName} = useContext(AppContext)
  return (
    <div>
        <h1 style={{color: 'red'}}>ANDROID COMPONENT...</h1>
        <h2>{compnayName}</h2>
        <Os11></Os11>
    </div>
  )
}
