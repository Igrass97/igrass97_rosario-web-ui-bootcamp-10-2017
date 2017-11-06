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

  @ViewChild(CharacterInfoComponent) child: CharacterInfoComponent;

  realm: string;
  guildName: string;
  guild: Guild;
  fetched: number = 0;
  members: Character[];
  races: Race[];
  classes: ClassType[];
  realmsFound: number = 0;
  realmList: Realm[];
  realmNames: String[] = [];

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

      //Subscribing to the observable and creating a realmNames array for the html select.
      this._fetchData.getRealms().subscribe(response =>{
      this.realmList = response;
      this.realmList.forEach(realm =>{
      this.realmNames.push(realm.name);
      });
      this.realmsFound = 1;
    });
  }

  searchGuild(realm: string, guildName: string){
    this._fetchData.getGuild(realm, guildName)
      .subscribe(response =>{
        this.guild = response;
        this.fetched = 1;
        this.members = Object.values(this.guild.members);
        console.log(this.members);
      });
  }

  searchMember(realm: string, name: string){
    this.child.searchCharacter(realm, name);
  }

}
