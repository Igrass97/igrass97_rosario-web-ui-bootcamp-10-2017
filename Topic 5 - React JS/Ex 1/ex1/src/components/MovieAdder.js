import React, { Component } from 'react';
import { Movie } from '../classes/Movie';

export class MovieAdder extends Component {

  constructor(){
    super();
    this.state = {
      newMovie: {}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({newMovie: new Movie(this.refs.id.value, this.refs.title.value, this.refs.duration.value, this.refs.year.value)},
    function(){
      this.props.addMovie(this.state.newMovie);
      this.refs.id.value = null;
      this.refs.title.value = null;
      this.refs.duration.value = null;
      this.refs.year.value = null;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Id</label>
            <br />
            <input type="number" ref="id"></input>
          </div>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title"></input>
          </div>
          <div>
            <label>Duration</label>
            <br />
            <input type="number" ref="duration"></input>
          </div>
          <div>
            <label>Year</label>
            <br />
            <input type="number" ref="year"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieAdder;