import React from "react";
import { Link } from "react-router-dom";
import { ButtonDemo } from "../components/ButtonDemo";

export const NeflixShows = () => {
  const ok = () => {
    alert("ok....");
  };

  const shows = [
    {
      id: 1010,
      name: "Narco's",
    },
    {
      id: 1011,
      name: "Breaking Bad",
    },
    {
      id: 1012,
      name: "Game of Thrones",
    },
  ];

  return (
    <div>
      <h1>SHOWS</h1>
      <ul>
        <li>
          <Link to="/shows/play/1001">Moeny Heist</Link>
        </li>
        <li>
          <Link to="/shows/play/1002">Stranger Things</Link>
        </li>
        <li>
          <Link to="/shows/play/1003">The Witcher</Link>
        </li>
        <li>
          <Link to="/shows/play/1004">The Crown</Link>
        </li>
        <li>
          <Link to="/shows/play/the umbrella Academy">
            The Umbrella Academy
          </Link>
        </li>
        {shows.map((show) => {
          return (
            <li>
              <Link to={`/shows/play/${show.id}`}>{show.name}</Link>
            </li>
          );
        })}
      </ul>
      <ButtonDemo
        class="btn btn-danger"
        name="delete"
        funName={() => {
          ok();
        }}
      ></ButtonDemo>
    </div>
  );
};
