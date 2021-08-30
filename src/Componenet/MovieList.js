import React from "react";
import Cardd from "./Cardd";

function MovieList({ tabmovies, abc }) {
  return (
    <div className="movielist">
      {tabmovies
        .filter((el) => el.title.toUpperCase().includes(abc.toUpperCase()))
        .map((elcard) => (
          <Cardd elcard={elcard} />
        ))}
    </div>
  );
}

export default MovieList;
