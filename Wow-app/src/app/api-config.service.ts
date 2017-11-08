import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class ApiConfigService {

  host: string = "https://us.api.battle.net/wow/"

  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor() { }

}
