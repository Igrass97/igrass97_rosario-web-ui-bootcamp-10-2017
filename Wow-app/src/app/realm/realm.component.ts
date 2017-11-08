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
  error: string;
  fetched: number = 0;

  constructor(private _fetchData: FetchDataService) { }

  ngOnInit() {
    this._fetchData.getRealms().subscribe((response) =>  {
      this.realmList = response;
      console.log(response);
      this.fetched = 1;
    });
  }
}
