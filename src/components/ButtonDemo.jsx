import React from 'react'

export const ButtonDemo = (props) => {
  return (
    <button className={props.class} onClick={props.funName}>{props.name}</button>
  )
}
