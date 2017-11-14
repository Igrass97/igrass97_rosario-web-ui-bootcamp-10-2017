import { Component, OnInit } from '@angular/core';
import { Guild } from '../guild';
import { ClassType } from '../class-type';
import { Race } from '../race';
import { Character } from '../character';
import { GetService } from '../get.service';

//Imports for the query params in the route
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ClassesService } from '../classes.service';
import { RacesService } from '../races.service';
import { GuildService } from '../guild.service';

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
  isError: boolean = false;
  loading: boolean = true;

  //Guild info (query parameters)
  realm: string;
  guildName: string;

  constructor(private _route: ActivatedRoute, private _getService: GetService, private _classesService: ClassesService, private _racesService: RacesService
  , private _guildService: GuildService) { }

  ngOnInit() {

   //Storing the races
   this._racesService.getRaces()
   .subscribe(racesResp => {
     this.races = racesResp.races;
   });

   //Storing the classes
   this._classesService.getClasses()
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
    this._guildService.getGuild(this.realm, this.guildName)
      .subscribe(response =>{
        this.guild = response;
        this.loading = false;
        this.members = Object.values(this.guild.members);
      },
      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.isError = true;
        this.loading = false;
      }  
    );
  }
}
