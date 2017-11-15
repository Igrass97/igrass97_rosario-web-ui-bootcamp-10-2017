import React, { Component } from 'react';

export class MovieItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
    <li>
      Id: {this.props.movie.id} - Title: {this.props.movie.title} -
      Duration: {this.props.movie.duration} - Year: {this.props.movie.year}
      <button onClick={this.handleClick}>Delete movie</button>
    </li>
    );
  }

  handleClick(){
    this.props.deleteMovie(this.props.movie.id);
  }
}

export default MovieItem;