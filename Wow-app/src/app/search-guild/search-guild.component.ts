import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { Realm } from '../realm';
import { Guild } from '../guild';
import { ClassType } from '../class-type';
import { Race } from '../race';
import { Character } from '../character';
import { GetService } from '../get.service';

@Component({
  selector: 'app-search-guild',
  templateUrl: './search-guild.component.html',
  styleUrls: ['./search-guild.component.scss']
})

export class SearchGuildComponent implements OnInit {

  realm: string;
  guildName: string;
  realmList: Realm[];
  realmNames: String[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private _getService: GetService) { }

  ngOnInit() {
    this._getService.getApi("/realm/status").subscribe(
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
