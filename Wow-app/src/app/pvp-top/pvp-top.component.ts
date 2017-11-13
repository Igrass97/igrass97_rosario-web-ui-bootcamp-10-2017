import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { GetService } from '../get.service';

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
  error: string;
  mode: string;
  found: number = 0;
  

  constructor(private _aRoute: ActivatedRoute, private _getService: GetService) {}

  ngOnInit(){

    //Query params
    this.routeSubscription = this._aRoute.params.subscribe(
      params => {
        this.mode = params.mode;
        this.found = 1;
        this.getLeaderboard();
      }
    );
  }

  ngOnDestroy() {
    if(this.routeSubscription) this.routeSubscription.unsubscribe();
  }
  
  getLeaderboard(){
    this._getService.getApi(`leaderboard/${this.mode}`).subscribe(
      resp => {
        this.pvpLeaderboard = resp.rows;
        this.found = 2;
      },

      err => {
        this.found = 3;
      }
    );
  }  
}
