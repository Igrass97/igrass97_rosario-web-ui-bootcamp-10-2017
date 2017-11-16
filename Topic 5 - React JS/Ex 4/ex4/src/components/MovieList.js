import React, { Component } from 'react';

export class MovieList extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.deleteMovie(e.target.value);
  }

  render() {
    let movies = this.props.movies;
    let moviesArray = movies.map(movie =>{ 
      return (
        <li>
          Id: {movie.id} - Title: {movie.title} -
          Duration: {movie.duration} - Year: {movie.year}
          <button value={movie.id} onClick={this.handleClick}>Delete movie</button>
        </li>
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