import React, { useState, useEffect } from "react";

function MovieSearch({ search, darkMode }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "ec21ea39";

  useEffect(() => {
    if (!search.trim()) {
      setMovie(null);
      setError(null);
      return;
    }

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&t=${search}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
          setError(null);
        } else {
          setMovie(null);
          setError(data.Error);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setMovie(null);
          setError("Error fetching movie data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [search]);

  return (
    <div className="mt-10 w-full max-w-3xl mx-auto">
      {loading && (
        <div className="text-xl text-white text-center animate-pulse">
          Loading...
        </div>
      )}

      {error && <div className="text-red-500 text-center">{error}</div>}

      {movie && (
        <div
          className={` ${
            darkMode ? "bg-[#1A1A1D] text-white shadow-white/50 shadow-lg " : "text-black bg-white"
          } shadow-2xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105`}
        >
          <div className="relative">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-96 object-cover rounded-t-xl"
            />
            <div className="absolute top-0 left-0 p-6 bg-black/50 rounded-b-3xl">
              <h2 className="text-4xl font-[Poppins] font-bold text-white">{movie.Title}</h2>
              <p className="text-xl text-gray-300 mt-2">{movie.Year}</p>
            </div>
          </div>
          <div className="p-6">
            <p className={`text-lg ${darkMode? 'bg-[#1A1A1D] text-white' : 'bg-white' }`}>{movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
