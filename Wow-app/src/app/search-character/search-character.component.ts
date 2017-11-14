import { Component, OnInit, ViewChild } from '@angular/core';
import { Realm } from '../realm';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { GetService } from '../get.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})

export class SearchCharacterComponent implements OnInit {

  name: string;
  realm: string;
  realmList: Realm[];
  realmNames: String[] = [];
  error: boolean = false;
  loading: boolean = true;

  constructor(private _fetchData: GetService) { }

  ngOnInit() {
    this._fetchData.getApi("/realm/status").subscribe(
      resp => {
        this.realmList = resp.realms;
        this.realmList.forEach(
          realm => {
            this.realmNames.push(realm.name);
          }
        );
        this.loading = false;
      },

      err => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
