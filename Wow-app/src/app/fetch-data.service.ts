import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Realm } from './realm';
import { Character } from './character';
import { ClassType } from './class-type';
import { Race } from './race';
import { Guild } from './guild';
import { Observable } from 'rxjs/Observable';
import { ApiConfigService } from './api-config.service';


@Injectable()
export class FetchDataService {

  constructor(private _http: Http, private config: ApiConfigService) { }


  //Get realm list (response.realms)
  getRealms (): Observable<any>{
    let url: string = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
    return this._http
      .get(url)
        .map((response: Response) => response.json().realms);
  }

  //Get character info by passing two parameters
  getCharacter(realm: string, name: string): Observable<Character>{
    let url = `https://us.api.battle.net/wow/character/${realm}/${name}?fields=stats%2C+items%2C+pvp%2C+guild&locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`;
    return this._http
      .get(url)
        .map((response: Response) => response.json());
  }

  /* Get races list, because in the character info the race is and id and not a string
  so i'm using this info to display the name instead of the ID */
  getRaces(): Observable<Race[]>{
    let url = `${this.config.host}data/character/races?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`;
    return this._http
      .get(url, {headers: this.config.headers})
        .map((response: Response) => response.json().races);
  }

  //Same as races
  getClasses(): Observable<ClassType[]>{
    let url = `${this.config.host}data/character/classes?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`;
    return this._http
      .get(url, {headers: this.config.headers})
        .map((response: Response) => response.json().classes);
  }

  //Get Pvp Leaderboard
  getPvpLeaderboard(mode: string){
    let url = `${this.config.host}leaderboard/${mode}?locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`;
    return this._http
      .get(url, {headers: this.config.headers})
    //Get only the 10 first elements
        .map((response: Response) => response.json().rows.slice(0, 10));
  }

  //Get guild info
  getGuild(realm: string, name: string): Observable<Guild>{
    let url = `${this.config.host}guild/${realm}/${name}?fields=members&locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd`
    return this._http
      .get(url, {headers: this.config.headers})
        .map((response: Response) => response.json());
  }

  
  
}

