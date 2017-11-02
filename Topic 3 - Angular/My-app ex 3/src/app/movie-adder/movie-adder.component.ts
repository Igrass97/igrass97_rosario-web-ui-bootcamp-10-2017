import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../classes/movie';
import { MoviesDataStorageService } from '../services/movies-data-storage.services';


@Component({
  selector: 'app-movie-adder',
  templateUrl: './movie-adder.component.html',
  styleUrls: ['./movie-adder.component.scss']
})

export class MovieAdderComponent implements OnInit {

  @Input() movies: Movie[];
  @Output() onAdd = new EventEmitter<any>();

  viewAdder: boolean = false;
  newMovie: Movie = {
    id: null,
    title: null,
    year: null,  
    duration: null, 
  };

  constructor(private _dataService: MoviesDataStorageService) { }

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
    this.onAdd.emit();
  }

}
