import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {


    const {register,handleSubmit} = useForm()
    //register object input filed
    //handleSubmit function to handle form submission
    const submitHandler = (data) => {
        console.log("data...",data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type="text" {...register("name")}></input>
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type="text" {...register("email")}></input>
                </div>
                <div>
                    <label>FAV COLOR</label>
                    <input type="color" {...register("favcolor")}></input>
                </div>
                <div>
                    <label>GENDR</label>
                    <br />MALE : <input type = "radio" value="male" name = "gender" 
                    {...register("gender")}></input>
                    <br></br>
                    FEMALE : <input type = "radio" value="female" name = "gender" 
                    {...register("gender")}></input>
                </div>
                <div>
                    <label>SKILLS</label>
                    <br/> REACT : <input type="checkbox" value="react" name ="skills" {...register("skills")}></input>
                    <br/> ANGULAR : <input type="checkbox" value="angular" name ="skills" {...register("skills")}></input>
                    <br/> VUE : <input type="checkbox" value="vue" name ="skills" {...register("skills")}></input>
                </div>
                <div>
                    <label>SELECT COUNTRY</label>
                    <select {...register("country")}>
                        <option value="india">INDIA</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="SUBMIT"></input>
                </div>
        </form>
    </div>
  )
}
