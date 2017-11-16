import React, { Component } from 'react';
import { MovieList } from './components/MovieList';
import { MovieAdder } from './components/MovieAdder';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Nav  from './nav';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/movies" component={MovieList} />
          <Route path="/new" component={MovieAdder} />
        </div>
      </Router>
    );
  }
}

export default App;
