import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { depositAction } from "../redux/bankSlice";

export const BankComponent = () => {

    const [depAmount, setdepAmount] = useState(0)
    const dispacth = useDispatch();
    const depositHandler = ()=>{
        console.log(depAmount)
        dispacth(depositAction(parseInt(depAmount)))
    }

  return (
    <div>
      <h1>BANK COMPONENT</h1>
      <div>
        <h1>DEPOSIT</h1>
        <div>
            <label>AMOUNT</label>
            <input type="text" placeholder="enter deposit amount" onChange={(e)=>{setdepAmount(e.target.value)}}></input>
        </div>
        <div>
            <button onClick={depositHandler}>DEPOSIT</button>
        </div>
      </div>
    </div>
  );
};
