import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../classes/movie';
import { MoviesDataService } from '../services/movies-data.services';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css'],
  providers: [MoviesDataService]
})

export class MovieEditorComponent implements OnInit {

  @Input() movie: Movie;
  @Input() movies: Movie[]; 
  
  viewEditor: boolean = false;

  constructor(private _dataService: MoviesDataService) { }

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
