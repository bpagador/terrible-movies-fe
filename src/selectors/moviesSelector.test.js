const { getMovies } = require('./moviesSelectors');

describe('movies selectors', () => {
  it('selects the list of movies from state', () => {
    const state = {
      movies: [
        { title: 'Glitter' },
        { title: 'Trolls 2' }   
      ]
    };

    const movies = getMovies(state);

    expect(movies).toEqual([
      { title: 'Glitter' },
      { title: 'Trolls 2' }
    ]);
  });
});
