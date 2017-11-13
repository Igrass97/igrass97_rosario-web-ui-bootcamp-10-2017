import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
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

  newMovie: Movie = <Movie>{};

  constructor(private _dataService: MoviesDataStorageService) { }

  ngOnInit() {
    console.log(this.newMovie);
  }

  toggleAdder(){
    this.viewAdder = !this.viewAdder;
  }

  submitAdd(): void{
   this._dataService.addNew(this.newMovie);
   this.newMovie = <Movie>{};
   this.onAdd.emit();
  }

}
