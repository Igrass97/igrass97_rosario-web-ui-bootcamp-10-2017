import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';

@Injectable()

export class MoviesDataService{

  writeMoviesOnce(){
    if (localStorage.getItem("movieList")){
      console.log("List already exists");
    } else {

      const arrayList: Movie[] = [
        new Movie(1, "Star Wars: A new Hope", 121, 1977),
        new Movie(2, "Pulp Fiction", 152, 1994),
        new Movie(3, "Fear and Loathing in Las Vegas", 118, 1998),
        new Movie(4, "The Wall", 95, 1982),
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
    
  }
}