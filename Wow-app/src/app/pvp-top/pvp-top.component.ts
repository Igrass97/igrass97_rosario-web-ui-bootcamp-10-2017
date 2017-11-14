import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { GetService } from '../get.service';

//Imports for the query params in the route
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PvpService } from '../pvp.service';


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
  isError: boolean = false;
  loading: boolean = true;

  

  constructor(private _aRoute: ActivatedRoute, private _pvpService: PvpService) {}

  ngOnInit(){

    //Query params
    this.routeSubscription = this._aRoute.params.subscribe(
      params => {
        this.mode = params.mode;
        this.getLeaderboard();
      }
    );
  }

  ngOnDestroy() {
    if(this.routeSubscription) this.routeSubscription.unsubscribe();
  }
  
  getLeaderboard(){
    this.loading = true;
    this._pvpService.getPvp(this.mode).subscribe(
      resp => {
        this.pvpLeaderboard = resp.rows;
        this.pvpLeaderboard = this.pvpLeaderboard.slice(0, 10);
        this.loading = false;
      },

      err => {
        this.isError = true;
        this.loading = false;
      }
    );
  }  
}
