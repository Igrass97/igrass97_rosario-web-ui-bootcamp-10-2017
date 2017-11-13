import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';
import { Realm } from '../realm';

@Component({
  selector: 'app-realm',
  templateUrl: './realm.component.html',
  styleUrls: ['./realm.component.scss']
})

export class RealmComponent implements OnInit {

  realmList : Realm[];
  found: number = 0;

  constructor(private _fetchData: GetService) { }

  ngOnInit() {
    this.found = 1;
    this._fetchData.getApi("/realm/status").subscribe(
      resp => {
        this.realmList = resp.realms;
        this.found = 2;
      },
      err => {
        this.found = 3;
      }
    );
  }
}
