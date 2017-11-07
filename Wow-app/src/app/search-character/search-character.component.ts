import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Realm } from '../realm';

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
  fetched: number = 0;
  manualSearch: boolean = true;
  clicked: boolean = false;

  constructor(private _fetchData: FetchDataService ) { }

  ngOnInit() {
    //Subscribing to the observable and creating a realmNames array for the html select.
    this._fetchData.getRealms().subscribe(response =>{
      this.realmList = response;
      this.realmList.forEach(realm =>{
        this.realmNames.push(realm.name);
      });
      this.fetched = 1;
    });
  }
}
