import { useEffect, useState } from "react";
import "./App.css";
import movieClient from "./client";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    movieClient.getPopular().then((data) => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    movieClient.search(term).then((data) => setMovies(data.results || []));
  };
  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1>Movies</h1>
        </div>
        <div className="search_box">
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
