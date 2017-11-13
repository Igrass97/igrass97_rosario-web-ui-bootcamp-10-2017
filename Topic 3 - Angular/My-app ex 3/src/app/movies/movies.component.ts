import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataStorageService } from '../services/movies-data-storage.services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  selectedMovie: Movie;
  viewAdder: boolean = false;

  constructor(private _moviesDataService: MoviesDataStorageService) { }

  ngOnInit() {
    this._moviesDataService.writeMoviesOnce();
    this.movies = this._moviesDataService.getMovies();
    console.log(this.movies);
  }

  onSelect(movie: Movie) : void {
    this.selectedMovie = movie;
  }

  toggleAdder(){
    this.viewAdder = !this.viewAdder;
  }

  onAdd(){
    this.movies = this._moviesDataService.getMovies();    
  }
}
