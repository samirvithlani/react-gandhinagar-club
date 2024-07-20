import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

export const ProductComp = () => {

  //dispatch is a function that is used to dispatch an action
  const dispacth = useDispatch();
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Iphone 15</h5>
          <p className="card-text">
            iphonr 15 is the best phone in the world
          </p>
          <button onClick={()=>dispacth(addToCart({id:101,name:"iphone15",price:20}))} className="btn btn-primary">
            add to cart
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Samsung s24</h5>
          <p className="card-text">
            Samsung s24 is the best phone in the world
          </p>
          <button onClick={()=>dispacth(addToCart({id:102,name:"samsung s24",price:10}))} className="btn btn-primary">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
