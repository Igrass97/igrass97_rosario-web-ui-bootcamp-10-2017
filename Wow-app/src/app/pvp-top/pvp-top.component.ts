import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CharacterInfoComponent } from '../character-info/character-info.component';


@Component({
  selector: 'app-pvp-top',
  templateUrl: './pvp-top.component.html',
  styleUrls: ['./pvp-top.component.scss']
})

export class PvpTopComponent implements AfterViewInit {

  //Viewing child for calling the SearchCharacter method
  @ViewChild(CharacterInfoComponent) child: CharacterInfoComponent;
  
  pvpLeaderboard;
  found: number = 0;
  error: string;

  constructor(private _fetchData: FetchDataService) {}

  ngAfterViewInit() {
  
  }
  
  getLeaderboard(mode: string){
    this.found = 1;
    this._fetchData.getPvpLeaderboard(mode)
    .subscribe(
      leaderboardResponse => {
      this.pvpLeaderboard = leaderboardResponse;
      this.found = 2;
      console.log(this.pvpLeaderboard);
      },
      error => {
        let body = JSON.parse(error._body);
        this.error = body.reason;
        this.found = 3;
      }
    );
  }
}
