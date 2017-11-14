import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, URLSearchParams} from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

  host: string = "https://us.api.battle.net/wow/";
  locale: string = "en_US";
  apiKey: string = "s7md2yb8vw4fvrmfgwjkpjjyfsvryvqd";
  constructor(private _http: Http) { }
  
  getApi(endpoint, ...fields){
    
    let url = this.host + endpoint;

    let params = new URLSearchParams();
    //all fields are in ?fields=, so I join the rest parameters and use that string
    let fieldsArray = Array.from(fields);
    let fieldsString = fieldsArray.join("+");
    
    //building parameters
    params.set('locale', this.locale);
    params.set('apikey', this.apiKey);
    params.set('fields', fieldsString);


    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this._http.get(url, requestOptions)
      .map(res => res.json());
  }
}
