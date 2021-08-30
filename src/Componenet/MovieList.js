import React from "react";
import Cardd from "./Cardd";

function MovieList({ tabmovies }) {
  return (
    <div className="movielist">
      {tabmovies.map((elcard) => (
        <Cardd elcard={elcard} />
      ))}
    </div>
  );
}

export default MovieList;
