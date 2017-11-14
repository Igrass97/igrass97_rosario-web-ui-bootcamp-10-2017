import { Injectable } from '@angular/core';
import { GetService } from './get.service';
import { Race } from './race';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassesService {

  constructor(private _getService: GetService) { }

  getClasses(): Observable<any>{
    return this._getService.getApi("data/character/classes");
  }
}

