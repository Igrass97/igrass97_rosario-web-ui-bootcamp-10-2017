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
  fetched: boolean = false;
  manualSearch: boolean = false;

  constructor(private _fetchData: FetchDataService) {}

  ngAfterViewInit() {
    this._fetchData.getPvpLeaderboard()
      .subscribe(leaderboardResponse => {
        this.pvpLeaderboard = leaderboardResponse;
        this.fetched = true;
        console.log(this.pvpLeaderboard);
      });
  }

  selectCharacter(row){
    //Calling child method
    this.child.searchCharacter(row.realmSlug, row.name);
  }
}
