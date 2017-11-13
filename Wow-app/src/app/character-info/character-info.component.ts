import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { Race } from '../race';
import { ClassType } from '../class-type';
import { Item } from '../item';
import { Location } from '@angular/common';
import { GetService } from '../get.service';

//Imports for the query params in the route
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})

export class CharacterInfoComponent implements OnInit {
  //Router
  routeSubscription: Subscription;

  character: Character;

  //Data resources (class and race list)
  races: Race[];
  classes: ClassType[];

  //Item names
  itemValues: Array<any> = [];
  itemColOne : Array<any> = [];
  itemColTwo : Array<any> = [];

  //Character info (passed as query params)
  name : string;
  realm : string;

  //Control variables
  found: number = 0;
  error: string;

  constructor(private _route: ActivatedRoute, private _location: Location, private _getService: GetService) { }

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
        this.name = params.name;
        this.realm = params.realm;
      }
    );
    this.searchCharacter(this.realm, this.name);
  }

  searchCharacter(realm: string, name: string){
    this.found = 1;
    this._getService.getApi(`character/${realm}/${name}`, "items", "stats", "guild", "pvp").subscribe(
      resp => {
        this.character = resp;
        //Creating a item list to iterate on it in the view (the 2 first elements aren't items)
        this.itemValues = Object.values(resp.items).slice(2);
        //Two cols to display
        this.itemColOne = this.itemValues.slice(0, 8);
        this.itemColTwo = this.itemValues.slice(8, this.itemValues.length-1);
        this.found = 2; 
      },

      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.found = 3;    
      }
    );
  }

  navigateBack(){
    this._location.back();
  }
}
