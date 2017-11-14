import { Injectable } from '@angular/core';
import { GetService } from './get.service';

@Injectable()
export class RealmService {

  constructor(private _getService: GetService) { }

  getRealms(){
    return this._getService.getApi("realm/status");
  }
}
