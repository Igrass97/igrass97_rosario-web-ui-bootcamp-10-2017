import React, { Component } from 'react';
import { Movie } from '../classes/Movie';

export class MovieItem extends Component {

  render() {
    return (
    <li>
      Id: {this.props.movie.id} - Title: {this.props.movie.title} -
      Duration: {this.props.movie.duration} - Year: {this.props.movie.year}
    </li>
    );
  }
}

export default MovieItem;