import React, { Component } from 'react';
import { MovieItem } from '../components/MovieItem';
import store from '../store';

export class MovieList extends Component {

  constructor(){
    super();

    //Local initial state
    this.state = this.getInitialState();
    
    //Listening to store changes and updating local state
    store.subscribe(() =>{
      this.setState({
        movies: store.getState().movies,
        currentId: store.getState().currentId,
      });
    });

    //Bindings
    this.renderMovieItems = this.renderMovieItems.bind(this);
  }

  //Returns the store full state (movies and currentId)
  getInitialState(){
    return store.getState();
  }

  //Mapping and array of MovieItems with the info from the movies array provided by the store state
  renderMovieItems(){
    let movies = store.getState().movies;
    let moviesArray = movies.map(movie =>{ 
      return <MovieItem key={movie.id} movie={movie} />
    });
    return moviesArray;
  }

  render() {
    return (
      <ul>
        {this.renderMovieItems()}
      </ul>
      );
  }
}

export default MovieList;