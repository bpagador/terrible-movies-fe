import React from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from '../../selectors/moviesSelectors';
import Movie from './Movie';

const Movies = () => {
  const movies = useSelector(getMovies);

  const movieElements = movies.map(movie => (
    <li key={movie.id}>
      <Movie {...movie}/>
    </li>
  ));

  return (
    <ul>
      {movieElements}
    </ul>
  );
};

export default Movies;
