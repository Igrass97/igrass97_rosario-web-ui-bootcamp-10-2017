import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CharacterInfoComponent } from '../character-info/character-info.component';

//Imports for the query params in the route
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-pvp-top',
  templateUrl: './pvp-top.component.html',
  styleUrls: ['./pvp-top.component.scss']
})

export class PvpTopComponent implements OnInit, OnDestroy{
  //Router
  routeSubscription: Subscription;

  pvpLeaderboard;
  found: number = 0;
  error: string;
  mode: string;
  show: boolean;
  

  constructor(private _fetchData: FetchDataService, private _aRoute: ActivatedRoute) {}

  ngOnInit(){

    //Query params
    this.routeSubscription = this._aRoute.params.subscribe(
      params => {
        this.mode = params['mode'];
        this.getLeaderboard();
      }
    );
  }

  ngOnDestroy() {
    if(this.routeSubscription) this.routeSubscription.unsubscribe();
  }
  
  getLeaderboard(){
    this.found = 1;
    this._fetchData.getPvpLeaderboard(this.mode)
    .subscribe(
      response => {
      this.pvpLeaderboard = response;
      this.found = 2;
      },
      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.found = 3;
      }
    );
  }
}
