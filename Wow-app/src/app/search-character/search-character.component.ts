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

  @ViewChild(CharacterInfoComponent) child: CharacterInfoComponent;
  
  name: string;
  realm: string;
  realmList: Realm[];
  realmNames: String[] = [];
  fetched: number = 0;
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

  searchCharacter(){
    this.child.searchCharacter(this.realm, this.name);
    this.clicked = true;
  }

  goBack(){
    this.clicked = false;
  }
}
