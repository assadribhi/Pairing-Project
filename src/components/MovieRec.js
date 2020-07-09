// React
import React from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import MovieItem from "./MovieItem";
import { useParams } from "react-router";

const MovieRec = ({ movies, selectMovies }) => {
    const { moviesGenre } = useParams();

    const filteredMovies = movies.map((movie) =>
        movie.name === moviesGenre
    );
    console.log("filtered Movies", filteredMovies);

    const movieRec = filteredMovies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} selectMovies={selectMovies} />
    ));
    return (
        <div className="container">
            <ListWrapper className="raw">{filteredMovies}</ListWrapper>
        </div>
    );
};
export default MovieRec;