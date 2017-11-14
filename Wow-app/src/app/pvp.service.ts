import { Injectable } from '@angular/core';
import { GetService } from './get.service';

@Injectable()
export class PvpService {

  constructor(private _getService: GetService) { }

  getPvp(mode: string){
    return this._getService.getApi(`leaderboard/${mode}`);
  }
}
