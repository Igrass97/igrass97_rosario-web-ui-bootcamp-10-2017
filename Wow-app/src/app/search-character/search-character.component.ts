import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Realm } from '../realm';
import { CharacterInfoComponent } from '../character-info/character-info.component';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})

export class SearchCharacterComponent implements OnInit {

  name: string;
  realm: string;
  realmList: Realm[];
  realmNames: String[] = [];
  found: number = 0;


  constructor(private _fetchData: FetchDataService ) { }

  ngOnInit() {
    this.found = 1;
    //Subscribing to the observable and creating a realmNames array for the html select.
    this._fetchData.getRealms().subscribe(
      response => {
      this.realmList = response;
      this.realmList.forEach(realm =>{
        this.realmNames.push(realm.name);
      });
      this.found = 2;
      },
      error => {
        this.found = 3;
      }
    );
  }
}
