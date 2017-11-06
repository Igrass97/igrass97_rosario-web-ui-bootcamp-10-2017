import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Realm } from './classes/realm';

@Injectable()
export class FetchDataService {

  constructor(private _http: Http) { }


  //Get realm list (response.realms)
  getRealms (){
    let url: string = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
    return this._http.get(url)
      .map((response: Response) => response.json().realms);
  }

  //Get character info by passing two parameters
  getCharacter(realm: string, name: string){
    let url = `https://us.api.battle.net/wow/character/${realm}/${name}?fields=stats%2C+items%2C+pvp%2C+guild&locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`;
    return this._http.get(url)
      .map((response: Response) => response.json());
  }

  /* Get races list, because in the character info the race is and id and not a string
  so i'm using this info to display the name instead of the ID */
  getRaces(){
    let url = "https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
    return this._http.get(url)
      .map((response: Response) => response.json());
  }

  //Same as races
  getClasses(){
    let url = "https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
    return this._http.get(url)
      .map((response: Response) => response.json());
  }

  //Get Pvp Leaderboard
  getPvpLeaderboard(){
    let url = "https://us.api.battle.net/wow/leaderboard/2v2?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
    return this._http.get(url)
    //Get only the 10 first elements
      .map((response: Response) => response.json().rows.slice(0, 10));
  }

  //Get guild info
  getGuild(realm: string, name: string){
    let url = `https://us.api.battle.net/wow/guild/${realm}/${name}?fields=members&locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`
    return this._http.get(url)
      .map((response: Response) => response.json());
  }

  
  
}

