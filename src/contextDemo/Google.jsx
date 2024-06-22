import React, { useState } from 'react'
import { Android } from './Android'
import { AppContext } from './context'

export const Google = () => {

    const [compnayName, setcompnayName] = useState("Alphabet")
    const nameHandler = (name) =>{
        setcompnayName(name)
    }
  return (
    <div>
        <h1>GOOGLE COMPONENT...</h1>
        {/* <Android/>  props*/}
        <AppContext.Provider value={{compnayName,nameHandler}}>
            <Android/>
        </AppContext.Provider>
    </div>
  )
}
