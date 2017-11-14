import React, { Component } from 'react';
import { Movie } from '../classes/Movie';
import { MovieItem } from '../components/MovieItem';

export class Movies extends Component {

  render() {

    let movies;
    if (this.props.movies){
      movies = this.props.movies.map(
        movie => {
          return <MovieItem key={movie.id} movie={movie}/>
        }
      );
    }

    return( 
      <ul>
        {movies}
      </ul>
    );
  }
}

export default Movies;