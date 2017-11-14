import { Injectable } from '@angular/core';
import { GetService } from './get.service';
import { Race } from './race';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RacesService {

  constructor(private _getService: GetService) { }

  getRaces(): Observable<any>{
    return this._getService.getApi("data/character/races");
  }
}
