// React
import React from "react";
import { Link } from "react-router-dom";

// Styles

import { MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper key={movie.id} className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/movie/${movie.slug}`}>
        <img src={movie.poster} alt={movie.name} />
      </Link>
      <p className="movieName">Name: {movie.name}</p>
      <p className="movieGenre">Genre: {movie.genre}</p>
      <p className="moviePlot">Plot: {movie.plot}</p>
      <p className="movieRunTime">Run Time: {movie.runtime}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
