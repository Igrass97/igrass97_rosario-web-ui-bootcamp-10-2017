import { Component, OnInit } from '@angular/core';
import { Guild } from '../guild';
import { ClassType } from '../class-type';
import { Race } from '../race';
import { Character } from '../character';
import { FetchDataService } from '../fetch-data.service';

//Imports for the query params in the route
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-guild-info',
  templateUrl: './guild-info.component.html',
  styleUrls: ['./guild-info.component.scss']
})
export class GuildInfoComponent implements OnInit {
  //Router
  routeSubscription: Subscription;

  guild: Guild;
  members: Character[];
  races: Race[];
  classes: ClassType[];
  found: number = 0;
  error: string;

  //Guild info (query parameters)
  realm: string;
  guildName: string;

  constructor(private _fetchData: FetchDataService, private _route: ActivatedRoute) { }

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

    //Query params
    this.routeSubscription = this._route.params.subscribe(
      params => {
        this.guildName = params.guildName;
        this.realm = params.realm;
        this.searchGuild();
      }
    );

    
  }

  searchGuild(){
    this._fetchData.getGuild(this.realm, this.guildName)
      .subscribe(response =>{
        this.guild = response;
        this.found = 2;
        this.members = Object.values(this.guild.members);
      },
      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.found = 3;
      }  
    );
  }
}
