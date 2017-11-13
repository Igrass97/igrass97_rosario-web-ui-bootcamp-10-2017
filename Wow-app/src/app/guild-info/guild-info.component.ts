import { Component, OnInit } from '@angular/core';
import { Guild } from '../guild';
import { ClassType } from '../class-type';
import { Race } from '../race';
import { Character } from '../character';
import { GetService } from '../get.service';

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
  error: string;
  found: number = 0;

  //Guild info (query parameters)
  realm: string;
  guildName: string;

  constructor(private _route: ActivatedRoute, private _getService: GetService) { }

  ngOnInit() {

    //Storing the races
    this._getService.getApi("data/character/races")
    .subscribe(racesResp => {
      this.races = racesResp.races;
    });

    //Storing the classes
    this._getService.getApi("data/character/classes")
    .subscribe(classesResp => {
      this.classes = classesResp.classes;
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
    this.found = 1;
    this._getService.getApi(`guild/${this.realm}/${this.guildName}`, "members")
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
