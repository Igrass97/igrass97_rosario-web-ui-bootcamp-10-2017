import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Character } from '../character';
import { Race } from '../race';
import { ClassType } from '../class-type';
import { Item } from '../item';
import { Location } from '@angular/common';

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

  constructor(private _fetchData: FetchDataService, private _route: ActivatedRoute, private _location: Location) { }

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
          this.name = params.name;
          this.realm = params.realm;
        }
      );

      //Calls the search with the query params
      this.searchCharacter(this.realm, this.name);
  }

  searchCharacter(realm: string, name: string){
    this.found = 1;
    //Storing the character info
    this._fetchData.getCharacter(realm, name)
    .subscribe(
      characterResp => {
      this.character = characterResp;
      //Creating a item list to iterate on it in the view (the 2 first elements aren't items)
      this.itemValues = Object.values(characterResp.items).slice(2);
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
