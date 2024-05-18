import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
  return (
    <div>
      <h1>NetflixMovies</h1>
      <ul>
        <li>
          <Link to="/movies/thriller">THRILLER</Link>
        </li>
        <li>
          <Link to="/comedy">COMEDY</Link>
        </li>
      </ul>
    </div>
  );
};
