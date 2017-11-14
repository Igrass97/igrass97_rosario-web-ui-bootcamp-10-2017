import { Injectable } from '@angular/core';
import { GetService } from './get.service';

@Injectable()
export class GuildService {

  constructor(private _getService: GetService) { }

  getGuild(realm: string, name: string){
    return this._getService.getApi(`guild/${realm}/${name}`, "members");
  }
}
