import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateUser = () => {
    const id = useParams().id

    const {register,handleSubmit} = useForm({
        defaultValues:async()=>{
            const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
            //return res.data.data; //_id
            return({
                name:res.data.data.name,
                email:res.data.data.email,
                age:res.data.data.age,
                isActive:res.data.data.isActive
            })
        }
    });
    const navigate = useNavigate();
    
    const submitHandler = async(data)=>{
        //console.log(data);
        try{
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data);
        console.log(res);
        
        navigate("/apidemo1");

        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"{...register("name")}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"{...register("email")}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text"{...register("age")}/>
            </div>
            <div>
                <label>STATUS</label>
                <input type="text" {...register("isActive")}/>
            </div>
            <div>
                <input type="submit" value="Update User"/>
            </div>
        </form>
    </div>
  )
}
