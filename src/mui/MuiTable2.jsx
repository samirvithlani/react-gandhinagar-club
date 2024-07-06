import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiTable2 = () => {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 250,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "age",
      headerName: "age",
      width: 200,
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 200,
    },
    {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params)=>{
            return(
                <div>
                    <button onClick={()=>{
                        alert(params.row._id)
                    }} className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            )
        }
    }
  ];

  const [users, setusers] = useState([]);
  
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("data....",res.data.data);
    setusers(res.data.data);
    
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
     
      
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
      ></DataGrid>

    </div>
  );
};
