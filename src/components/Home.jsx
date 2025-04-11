import React from 'react';
import MovieCards from './MovieCards';

function Home({ movie }) {
  return (
    <div className="bg-black w-full h-screen">
      {movie ? (
        <MovieCards movie={movie} />
      ) : (
        <p className="text-white text-center">Search for a movie!</p>
      )}
    </div>
  );
}

export default Home;
