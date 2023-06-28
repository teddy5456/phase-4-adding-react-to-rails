import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then((response) => response.json())
      .then((moviesData) => setMovies(moviesData));
  }, []);

  return (
    <>
      
      <h1>Hello from React!</h1>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
}

export default App;
