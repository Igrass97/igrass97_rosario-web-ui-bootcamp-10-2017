import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CharacterInfoComponent } from '../character-info/character-info.component';


@Component({
  selector: 'app-pvp-top',
  templateUrl: './pvp-top.component.html',
  styleUrls: ['./pvp-top.component.scss']
})

export class PvpTopComponent implements OnInit{

  pvpLeaderboard;
  found: number = 0;
  error: string;

  constructor(private _fetchData: FetchDataService) {}

  ngOnInit(){
    this.getLeaderboard("2v2");
  }
  
  getLeaderboard(mode: string){
    this.found = 1;
    this._fetchData.getPvpLeaderboard(mode)
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
