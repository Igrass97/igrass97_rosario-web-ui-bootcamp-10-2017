import React, { Component } from 'react';
import { Movie } from '../classes/Movie';

export class MovieAdder extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.props.currentId,
      title: 'Title',
      year: 0,
      duration: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addMovie(this.state);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps != this.props){
      this.setState({
        id: nextProps.currentId
      });
    }
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