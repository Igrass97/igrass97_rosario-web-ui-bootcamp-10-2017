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
  found: number = 0;

  constructor(private _getService: GetService) { }

  ngOnInit() {
    this.found = 1;
    this._getService.getApi("/realm/status").subscribe(
      resp => {
        this.realmList = resp.realms;
        this.realmList.forEach(
          realm => {
            this.realmNames.push(realm.name);
          }
        );
        this.found = 2;
      },

      err => {
        this.found = 3;
      }
    );
  }
}
