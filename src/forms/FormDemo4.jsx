import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {handleSubmit,register,formState:{errors}} = useForm({mode:"all",defaultValues:{
        name:"ram",
        age:18
    }})
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"Name is Required*"
            }
        },
        age:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"min age should be 18"
            },
            max:{
                value:60,
                message:"max age should be 60"
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text"{...register("name",validationSchema.name)}></input>
                {
                    errors.name && <span>{errors.name.message}</span>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age",validationSchema.age)}></input>
                {
                    errors.age &&<span>{errors.age.message}</span>
                }
            </div>
            <div>
                <input type="submit" value="submit"></input>
            </div>
            </form>
        </div>
    </div>
  )
}
