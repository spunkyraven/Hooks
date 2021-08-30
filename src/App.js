import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MovieList from "./Componenet/MovieList";
import "./App.css";
import AddMovie from "./Componenet/AddMovie";
import { Container } from "react-bootstrap";
import SerachTitle from "./Componenet/SerachTitle";

function App() {
  let [tabmovies, setTabmovies] = useState([
    {
      title: "Godfather",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1972,
      rating: 6,
    },
    {
      title: "Inception",
      imgsrc:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      year: 2010,
      rating: 8,
    },
    {
      title: "300",
      imgsrc:
        "https://resizing.flixster.com/Q3yUH5rCj71Wc2LjYMaEbvSvxGw=/206x305/v2/https://flxt.tmsimg.com/assets/p163191_p_v10_an.jpg",
      year: 2007,
      rating: 5,
    },
    {
      title: "The Matrix",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      year: 2005,
      rating: 8,
    },
    {
      title: "Django",
      imgsrc:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt",
      year: 20012,
      rating: 8,
    },
    {
      title: "8miles",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjRFNBNG1AjDMi0P51RjuP8sCBrqV_h71TRBTlYXV9jErIhhG",
      year: 2002,
      rating: 8,
    },
  ]);

  let addMovie = (newmovie) => {
    setTabmovies([...tabmovies, newmovie]);
  };

  let search = (titleSearch) => {
    setTabmovies(
      tabmovies.filter((el) => el.title.toLowerCase().includes(titleSearch))
    );
  };

  return (
    <div>
      <Container>
        <SerachTitle search={search} />

        <MovieList tabmovies={tabmovies} />
        <AddMovie addMovie={addMovie} />
      </Container>
    </div>
  );
}
export default App;
