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
        Your Destination for all your Heavy Equipment needs.
      </Descreption>
    </>
  );
};

export default Home;
