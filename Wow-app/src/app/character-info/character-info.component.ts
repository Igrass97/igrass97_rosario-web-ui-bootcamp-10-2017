import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { Race } from '../race';
import { ClassType } from '../class-type';
import { Item } from '../item';
import { Location } from '@angular/common';
import { GetService } from '../get.service';
import { CharacterService } from '../character.service';

//Imports for the query params in the route
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RacesService } from '../races.service';
import { ClassesService } from '../classes.service';


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

  keyValues: string[];
  keyColOne: string[];
  keyColTwo: string[];

  //Character info (passed as query params)
  name : string;
  realm : string;

  //Control variables
  loading: boolean = true;
  isError: boolean = false;
  error: string;
  raceFound: boolean = false;
  classFound: boolean = false;

  constructor(private _route: ActivatedRoute, private _location: Location, private _characterService: CharacterService, private _racesService: RacesService
  , private _classesService: ClassesService) { }

  ngOnInit() {

    //Storing the races
    this._racesService.getRaces()
    .subscribe(racesResp => {
      this.races = racesResp.races;
      this.raceFound = true;
    });

    //Storing the classes
    this._classesService.getClasses()
    .subscribe(classesResp => {
      this.classes = classesResp.classes;
      this.classFound = true;
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
    this._characterService.getCharacter(realm, name).subscribe(
      resp => {
        this.character = resp;

        //Creating a item list to iterate on it in the view (the 2 first elements aren't items)
        this.itemValues = Object.values(resp.items).slice(2);
        this.keyValues = Object.keys(resp.items).slice(2);
        //Capitalize first letter of each key
        this.keyValues = this.keyValues.map(
          key => {
            return this.capitalize(key);
          }
        );
    
        //Two cols to display
        this.itemColOne = this.itemValues.slice(0, 9);
        this.itemColTwo = this.itemValues.slice(9, this.itemValues.length);
        this.keyColOne = this.keyValues.slice(0, 9);
        this.keyColTwo = this.keyValues.slice(9, this.keyValues.length);
       
        this.loading = false;
      },

      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.isError = true;
        this.loading = false;    
      }
    );
  }

  raceCheck(id: number): string {
    let raceName = "Race not found";
      if (this.raceFound){
      this.races.forEach(
        race => {
          if (race.id == id){
            raceName = race.name;
          }
        }
      );
    }
    return raceName;
  }

  classCheck(id: number): string {
    let className = "Class not found";
      if (this.classFound){
      this.classes.forEach(
        classType => {
          if (classType.id == id){
            className = classType.name;
          }
        }
      );
    }
    return className;
  }

  capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1);
  }

  navigateBack(){
    this._location.back();
  }
}
