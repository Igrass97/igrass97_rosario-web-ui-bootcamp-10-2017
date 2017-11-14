import { Injectable } from '@angular/core';
import { GetService } from './get.service';
import { Observable } from 'rxjs/Observable';
import { Character } from './character';

@Injectable()
export class CharacterService {

  constructor(private _getService: GetService) { }

  getCharacter(realm:string, name:string): Observable<Character>{
    return this._getService.getApi(`character/${realm}/${name}`, "stats", "guild", "pvp", "items");
  }
}
