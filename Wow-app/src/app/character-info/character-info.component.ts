import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Character } from '../classes/character';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  @Input() name: string;
  @Input() realm: string;
  @Input() manualSearch: string;
  
  character = {};
  itemValues = [];
  races = {};
  classes = {};
  found: boolean = false;

  constructor(private _fetchData: FetchDataService) { }

  ngOnInit() {
      //Storing the races
      this._fetchData.getRaces()
      .subscribe(racesResp => {
        this.races = racesResp;
      });

      //Storing the classes
      this._fetchData.getClasses()
      .subscribe(classesResp => {
        this.classes = classesResp;
      });
  }

  searchCharacter(realm: string, name: string){
    //Storing the character info
    this._fetchData.getCharacter(realm, name)
    .subscribe(characterResp => {
      this.character = characterResp;

      //Creating a item list to iterate on it in the view (the 2 first elements aren't items)
      this.itemValues = Object.values(characterResp.items).slice(2);
      this.found = true; 
    });
  }
}
