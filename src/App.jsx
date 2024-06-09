import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "daisyui/dist/full.css";

const API_KEY = "your_omdb_api_key"; // Replace with your OMDb API key
const API_URL = `https://www.omdbapi.com/?s=latest&apikey=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800 text-center">
        <h1 className="text-3xl font-bold">Latest Movies</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="card bg-gray-800 shadow-lg">
              <figure>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">{movie.Title}</h2>
                <p className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" /> {movie.Year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
