import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {MoviesComponent} from "./movies/movies.component";

export const appRouter: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "movies", component: MoviesComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouter);