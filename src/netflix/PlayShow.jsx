import React from "react";
import { useParams } from "react-router-dom";
import { ButtonDemo } from "../components/ButtonDemo";

export const PlayShow = () => {
  const id = useParams().id;
  console.log(useParams());
  return (
    <div>
      <h1>PLAYING SHOW ID = {id}</h1>
      
    </div>
  );
};
