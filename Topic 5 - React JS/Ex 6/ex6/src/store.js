import { createStore } from 'redux';
import { Movie } from './classes/Movie';

const reducer = (state, action) => {
  if (action.type === "ADD_MOVIE"){
    return {
      ...state,
      movies: state.movies.concat(action.payload),
      currentId: state.currentId + 1,
    }
  }

  if (action.type === "DELETE_MOVIE"){
    return {
      ...state,
      movies: state.movies.filter((movie) => {
        return movie.id !== action.payload;
      })
    }
  }
  return state;
}

export default createStore(reducer, {
  movies: [
    new Movie(0, "Fear and Loathing in Las Vegas", 118, 1998),
    new Movie(1, "Star Wars ep V", 124, 1980),
    new Movie(2, "Pulp Fiction", 152, 1994),
  ],
  
  currentId: 3
});