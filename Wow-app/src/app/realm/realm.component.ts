import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Realm } from '../realm';

@Component({
  selector: 'app-realm',
  templateUrl: './realm.component.html',
  styleUrls: ['./realm.component.scss']
})

export class RealmComponent implements OnInit {

  realmList : Realm[];
  found: number = 0;

  constructor(private _fetchData: FetchDataService) { }

  ngOnInit() {
    this.found = 1;
    this._fetchData.getRealms().subscribe(
      (response) =>  {
        this.realmList = response;
        this.found = 2;
      },
      (error) => {
        this.found = 3;
      }
    );
  }
}
