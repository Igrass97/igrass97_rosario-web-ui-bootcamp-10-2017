import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PvpTopComponent } from './pvp-top/pvp-top.component';
import { RealmComponent } from './realm/realm.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { SearchGuildComponent } from './search-guild/search-guild.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

export const router : Routes = [
  { path: "", redirectTo: "realm", pathMatch: "full"},
  { path: "realm", component: RealmComponent },
  { path: "Pvp/:mode", component: PvpTopComponent },
  { path: "Character", component: SearchCharacterComponent },
  { path: "Character/:realm/:name", component: CharacterInfoComponent },
  { path: "search-guild", component: SearchGuildComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);