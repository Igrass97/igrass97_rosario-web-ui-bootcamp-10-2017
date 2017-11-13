import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

  host: string = "https://us.api.battle.net/wow/";
  constInfo: string = "locale=en_US&apikey=s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";

  constructor(private _http: Http) { }
  
  getApi(endpoint, ...fields){
    
    let url = this.host + endpoint + "?" + this.constInfo;

    url = url + "&fields=";
    let fieldsArray = Array.from(fields);
    fieldsArray.forEach(
      field => {
        if (field !== fieldsArray[fieldsArray.length-1]){
          url = url + field + "%2C+";
        } else {
          url = url + field;
        }
      }
    );
    return this._http.get(url)
      .map(res => res.json());
  }
}
