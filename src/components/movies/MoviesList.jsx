import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../services/terribleMovies';
import Movies from './Movies';
import { setMovies } from '../../store/actions/moviesActions';


const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies()
      .then(movies => {
        dispatch(setMovies(movies));
      });
  }, []);

  return (
    <Movies />
  );
};

export default MoviesList;
