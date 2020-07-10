// Components
import { Redirect, useParams } from "react-router-dom";

// React
import React from "react";

// Styles
import { DetailWrapper, ListWrapper, MovieWrapper } from "../styles";
import MovieItem from "./MovieItem";

const MovieDetail = ({ movies }) => {
  const { movieSlug } = useParams();
  console.log(`movieSlug-> ${movieSlug}`)
  const selected = movies.find((movie) => movie.slug === movieSlug);
  if (!selected) return <Redirect to="/movies" />;


  const filteredMovies = movies.filter((movie) =>
    ((movie.genre.includes(selected.genre[0]) || movie.genre.includes(selected.genre[1]) || movie.genre.includes(selected.genre[2]))) && selected !== movie
  );
  console.log("filtered Movies", filteredMovies);

  const movieRec = filteredMovies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return (
    <div >
      <DetailWrapper className="row">
        <img src={selected.poster} alt={selected.name} />
        <h1 className="movieName">Name: {selected.name} </h1>
        <p className="movieGenre">Genre: {selected.genre.toString()}</p>
        <p className="moviePlot">Plot: {selected.plot}</p>
        <p className="movieRunTime">Run Time: {selected.runtime}</p>
      </DetailWrapper>
      <ListWrapper className="row" >
        <h1>Reccommended</h1>
        <div className="row">
          {movieRec}
        </div>
      </ListWrapper>
    </div>
  );
};
export default MovieDetail;
