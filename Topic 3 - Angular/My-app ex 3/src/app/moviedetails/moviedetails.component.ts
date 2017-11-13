import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})



export class MoviedetailsComponent implements OnInit {

  @Input() movie: Movie;
  
  constructor() { }

  ngOnInit() {
  }

}
