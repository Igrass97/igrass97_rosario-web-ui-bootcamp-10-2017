import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChallengeTopComponent } from './challenge-top/challenge-top.component';
import { PvpTopComponent } from './pvp-top/pvp-top.component';
import { RealmComponent } from './realm/realm.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { SearchGuildComponent } from './search-guild/search-guild.component';

export const router : Routes = [
  { path: "", redirectTo: "realm", pathMatch: "full"},
  { path: "realm", component: RealmComponent },
  { path: "pvp", component: PvpTopComponent },
  { path: "challenge", component: ChallengeTopComponent },
  { path: "search-character", component: SearchCharacterComponent },
  { path: "search-guild", component: SearchGuildComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);