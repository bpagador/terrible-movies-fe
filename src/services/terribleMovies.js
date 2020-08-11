export const fetchMovies = () => {
  return fetch('http://localhost:7890/api/v1/movies')
    .then(res => res.json());
};
