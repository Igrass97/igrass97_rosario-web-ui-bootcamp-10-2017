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
  error: boolean = false;
  loading: boolean = true;

  constructor(private _fetchData: GetService) { }

  ngOnInit() {
    this._fetchData.getApi("realm/status").subscribe(
      resp => {
        this.realmList = resp.realms;
        this.loading = false;
      },
      err => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
