import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div id={index}>
            <h3>Title: {movie.title}</h3>
            <p>running time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) => <li id={index}>{genre}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
