// Data
import movies from "./movies";

// React
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

// Styles
import { ThemeSwitcher, GlobalStyle } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

// Components
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import Home from "./components/Home";

const theme = {
  lightTheme: {
    backgroundColor: "#c0c0c0",
    fontColor: "#000000",
    priceFontColor: "#FFD300",
  },
  darkTheme: {
    backgroundColor: "#000000",
    fontColor: "#c0c0c0",
    priceFontColor: "#FFD300",
  },
};

function App() {
  const [_movies, setMovies] = useState(movies);
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
    console.log(currentTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeSwitcher onClick={toggleTheme}>
        {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
      </ThemeSwitcher>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:movieSlug">
          <MovieDetail movies={_movies} />
        </Route>
        <Route path="/movies">
          <MoviesList movies={_movies} setMovies={setMovies} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
