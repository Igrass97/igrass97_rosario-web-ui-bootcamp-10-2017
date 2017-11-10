import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { Realm } from '../realm';
import { Guild } from '../guild';
import { ClassType } from '../class-type';
import { Race } from '../race';
import { Character } from '../character';

@Component({
  selector: 'app-search-guild',
  templateUrl: './search-guild.component.html',
  styleUrls: ['./search-guild.component.scss']
})

export class SearchGuildComponent implements OnInit {

  realm: string;
  guildName: string;
  found: number = 0;
  realmsFound: number = 0;
  realmList: Realm[];
  realmNames: String[] = [];

  constructor(private _fetchData: FetchDataService) { }

  ngOnInit() {
      //Subscribing to the observable and creating a realmNames array for the html select.
      this._fetchData.getRealms().subscribe(response =>{
      this.realmList = response;
      this.realmList.forEach(realm =>{
      this.realmNames.push(realm.name);
      });
      this.realmsFound = 1;
    });
  }
}
