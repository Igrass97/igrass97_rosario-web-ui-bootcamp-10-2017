import React, { Component } from 'react';
import { Movie } from './classes/Movie';
import { Movies } from './components/Movies';
import { MovieAdder } from './components/MovieAdder';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movieList: [
        new Movie(0, "Fear and Loathing in Las Vegas", 118, 1998),
        new Movie(1, "Star Wars ep V", 124, 1980),
        new Movie(2, "Pulp Fiction", 152, 1994),
      ]
    }
  }

  handleAddMovie(movie){
    let movies = this.state.movieList;
    movies.push(movie);
    this.setState({movieList: movies});
  }

  render() {
    return (
      <div className="App">
        <Movies movies={this.state.movieList}/>
        <MovieAdder addMovie={this.handleAddMovie.bind(this)}/>
      </div>
    );
  }
}

export default App;
