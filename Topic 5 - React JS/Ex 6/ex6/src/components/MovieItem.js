import React, { Component } from 'react';
import store from '../store';

export class MovieItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
    <li className="movie-item">
      <strong>Id:</strong> {this.props.movie.id}
      <br />
      <strong>Title: </strong>{this.props.movie.title}
      <br />
      <strong>Duration: </strong>{this.props.movie.duration}
      <br />
      <strong>Year: </strong> {this.props.movie.year}
      <br />
      <button onClick={this.handleClick}>Delete movie</button>
    </li>
    );
  }

  handleClick(){
    store.dispatch({
      type: "DELETE_MOVIE",
      payload: this.props.movie.id
    })
  }
}

export default MovieItem;