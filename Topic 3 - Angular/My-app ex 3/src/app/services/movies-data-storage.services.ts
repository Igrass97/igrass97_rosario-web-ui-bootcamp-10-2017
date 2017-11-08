import { Injectable } from '@angular/core';
import { Movie } from '../movie';

@Injectable()

export class MoviesDataStorageService{

  writeMoviesOnce(){
    if (localStorage.getItem("movieList")){
      console.log("List already exists");
    } else {

      let arrayList: Movie[];
      
      arrayList = [
        {
          id: 1,
          title: "Star Wars ep V",
          year: 1980,
          duration: 124
        },
        {
          id: 2,
          title: "Pulp Fiction",
          year: 1994,
          duration: 152
        },
        {
          id: 3,
          title: "Fear and Loathing in Las Vegas",
          year: 1998,
          duration: 118
        }
      ]

      const stringList = JSON.stringify(arrayList);

      localStorage.setItem("movieList", stringList);
    }
  }

  getMovies() : Movie[]{
    let textList = localStorage.getItem("movieList");
    let objList = JSON.parse(textList);
    return objList;
  }

  writeMovies(movies: Movie[]){
    let textList = JSON.stringify(movies);
    localStorage.setItem("movieList", textList);
  }

  addNew(newMovie: Movie): void {
    let movies = this.getMovies();
    movies.push(newMovie);
    this.writeMovies(movies);
  }
}