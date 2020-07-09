import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Descreption, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Link to="/movies">
        <Title>Movies</Title>
      </Link>
      <Descreption>
        Home for Movies
      </Descreption>
    </>
  );
};

export default Home;
