import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../classes/movie';
import { MoviesDataStorageService } from '../services/movies-data-storage.services';


@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss'],

})

export class MovieEditorComponent implements OnInit {

  @Input() movie: Movie;
  @Input() movies: Movie[]; 
  
  viewEditor: boolean = false;

  constructor(private _dataService: MoviesDataStorageService) { }

  ngOnInit() {
  }

  toggleEditor(): void {
    if (this.viewEditor){
      this.viewEditor = false;
    } else {
      this.viewEditor = true;
    }
  }

}
