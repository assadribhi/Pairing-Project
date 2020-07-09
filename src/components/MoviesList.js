// React
import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MoviesList = ({ movies, selectMovies }) => {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("filtered Movies", filteredMovies);

  const movieList = filteredMovies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} selectMovies={selectMovies} />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="raw">{movieList}</ListWrapper>
    </div>
  );
};
export default MoviesList;
