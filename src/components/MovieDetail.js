// Components
import { Redirect, useParams } from "react-router-dom";

// React
import React from "react";

// Styles
import { DetailWrapper } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieSlug } = useParams();

  const movie = movies.find((movie) => movie.slug === movieSlug);
  if (!movie) return <Redirect to="/movies" />;
  return (
    <DetailWrapper>
      <h1>test</h1>
      <img src={movie.poster} alt={movie.name} />
      <h1 className="movieName">Name: {movie.name} </h1>
      <p className="movieGenre">Genre: {movie.genre}</p>
      <p className="moviePlot">Plot: {movie.plot}</p>
      <p className="movieRunTime">Run Time: {movie.runtime}</p>
    </DetailWrapper>
  );
};
export default MovieDetail;
