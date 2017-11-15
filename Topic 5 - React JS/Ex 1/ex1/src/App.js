import React, { Component } from 'react';
import { Movie } from './classes/Movie';
import { MovieList } from './components/MovieList';
import { MovieAdder } from './components/MovieAdder';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [
        new Movie(0, "Fear and Loathing in Las Vegas", 118, 1998),
        new Movie(1, "Star Wars ep V", 124, 1980),
        new Movie(2, "Pulp Fiction", 152, 1994),
      ],
      currentId: 3
    }

    this.addMovie = this.addMovie.bind(this);
    this.incrementId = this.incrementId.bind(this);
  }

  addMovie(movieDetails){
    const newMovie = new Movie(movieDetails.id, movieDetails.title, movieDetails.duration, movieDetails.year);

    this.setState(oldState => ({
      movies: [...oldState.movies, newMovie],
      currentId: oldState.currentId + 1
    }));
  }

  incrementId(){
    this.setState(prevState =>{
      currentId: prevState.currentId + 1;
    });
  }

  render() {
    return (
      <div className="App">
        <MovieList movies={this.state.movies} />
        <MovieAdder currentId={this.state.currentId} addMovie={this.addMovie} incrementId={this.incrementId} />
      </div>
    );
  }
}

export default App;
