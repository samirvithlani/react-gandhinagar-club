import axios from "axios";
import React, { useState } from "react";

export const MovieApi = () => {
  const [movie, setmovie] = useState();
  const [movieInput, setmovieInput] = useState("")

  const fetchMovie = async () => {
    const res = await axios.get(
      "https://moviedatabase8.p.rapidapi.com/Search/"+movieInput,
      {
        headers: {
          "x-rapidapi-key":
            "add yours",
          "x-rapidapi-host": "add yours",
        },
      }
    );

    console.log(res);
    setmovie(res.data[0]);
  };
  return (
    <div>
        <input type="text" onChange={(e)=>{setmovieInput(e.target.value)}}></input>
      <button
        onClick={() => {
          fetchMovie();
        }}
      >
        Fetch Movie
      </button>
      {movie && (
        <div>
          <h1>MOVIE DATA</h1>
          <h2>TITLE = {movie.title}</h2>
          <h2>Revenue = {movie.revenue}</h2>
          <img src={movie.poster_path} height="400" width="250"></img>
        </div>
      )}
    </div>
  );
};
