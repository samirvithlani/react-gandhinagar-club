import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    var [questions, setquestions] = useState(["what is your name?","what is your age?"])
    const addNewQuestion = () =>{

        var que = "what is your fav color?"
        //spread operator
        questions = [...questions,que]
        //console.log(questions)
        setquestions(questions) //after adding 1 question, set the new array to the state


    }
  return (
    <div>
        <h1>useState Demo 2</h1>
        <ul>
            {
                questions.map((question)=>{
                    return(
                        <li>{question}</li>
                    )
                })
            }

        </ul>
        <button onClick={()=>{addNewQuestion()}}>Add New Question</button>

    </div>
  )
}
