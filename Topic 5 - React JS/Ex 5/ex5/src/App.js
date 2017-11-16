import React, { Component } from 'react';
import { MovieList } from './components/MovieList';
import { MovieAdder } from './components/MovieAdder';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MovieList />
        <MovieAdder />
      </div>
    );
  }
}

export default App;
