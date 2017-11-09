import { Injectable } from '@angular/core';
import { Movie } from '../movie';

@Injectable()

export class MoviesDataStorageService{

  constructor(){}

  writeMoviesOnce(){
    if (localStorage.getItem("movieList")){
      console.log("List already exists");
    } else {

      let arrayList: Movie[];
      
      arrayList = [ new Movie(1, "Star Wars ep V", 1980, 124),
                    new Movie(2, "Pulp Fiction", 1994, 152),
                    new Movie(3, "Fear and Loathing in Las Vegas", 1998, 1118),
                  ];

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