import React, { Component } from 'react';
import { Movie } from '../classes/Movie';
import store from '../store';

export class MovieAdder extends Component {

  constructor(props){
    super(props);

    //Initial local state of component
    this.state = {
      id: store.getState().currentId,
      title: 'Title',
      year: 0,
      duration: 0
    }

    //Bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //Subscribe to update the id
    store.subscribe(() =>{
      this.setState({
        id: store.getState().currentId
      });
    });
  }

  //Setting the local state when the inputs change
  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //Dispattching ADD_MOVIE action
  handleSubmit(e){
    e.preventDefault();
    store.dispatch({
      type: "ADD_MOVIE",
      payload: this.state
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label>
          Year:
          <br />
          <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label>
          Duration:
          <br />
          <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MovieAdder;