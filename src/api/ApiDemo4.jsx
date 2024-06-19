import axios from "axios";
import React from "react";

export const ApiDemo4 = () => {
    const postUser = async () => {
        const user = {
            name: "test",
            email: "test1101@gmail.com",
            gender:"male",
            status:"active"
        }
        try{
        const res = await axios.post("https://gorest.co.in/public/v2/users",user,{
            headers:{
                "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
            }
        })
        console.log(res);
        }catch(e){
            console.log(e);
        
        }


    }
  return (
    <div>
      <h1>API DEMO 4</h1>
      <button onClick={()=>{postUser()}}>Post User</button>
    </div>
  );
};
