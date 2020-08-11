import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ title, poster }) => (
  <figure>
    <img src={poster} />
    <figcaption>{title}</figcaption>
  </figure>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
