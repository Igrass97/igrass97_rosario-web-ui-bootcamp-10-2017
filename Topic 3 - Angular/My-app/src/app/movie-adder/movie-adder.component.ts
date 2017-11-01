import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../classes/movie';
import { MoviesDataService } from '../services/movies-data.services'

@Component({
  selector: 'app-movie-adder',
  templateUrl: './movie-adder.component.html',
  styleUrls: ['./movie-adder.component.css']
})

export class MovieAdderComponent implements OnInit {

  @Input() movies: Movie[];
  @Output() onAdd = new EventEmitter<boolean>();

  viewAdder: boolean = false;
  newMovie: Movie = {
    id: null,
    title: null,
    year: null,  
    duration: null, 
  };

  constructor(private _dataService: MoviesDataService) { }

  ngOnInit() {
  }

  toggleAdder(){
    if (this.viewAdder){
      this.viewAdder = false;
    } else {
      this.viewAdder = true;
    }
  }

  submitAdd(): void{
   this._dataService.addNew(this.newMovie);
   this.newMovie = {
    id: null,
    title: null,
    year: null,  
    duration: null, 
    };
    this.onAdd.emit(true);
  }

}
