const { setMovies, SET_MOVIES } = require('./moviesActions');

describe('movies actions', () => {
  it('creates a SET_MOVIES action', () => {
    const action = setMovies([
      { title: 'Glitter' },
      { title: 'Trolls 2' }
    ]);

    expect(action).toEqual({
      type: SET_MOVIES,
      payload: [
        { title: 'Glitter' },
        { title: 'Trolls 2' }
      ]
    });
  });
});
