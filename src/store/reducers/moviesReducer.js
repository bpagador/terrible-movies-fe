import { SET_MOVIES } from '../actions/moviesActions';

export const initialState = {
  movies: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
