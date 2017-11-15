import React, { Component } from 'react';
import { MovieItem } from '../components/MovieItem';

export class MovieList extends Component {

  render() {
    let movies = this.props.movies;
    let moviesArray = movies.map(movie =>{ 
      return (
      <div>
        <MovieItem key={movie.id} movie={movie} />
      </div>
      );
    });
    return (
      <ul>
        {moviesArray}
      </ul>
    );
  }
}

export default MovieList;