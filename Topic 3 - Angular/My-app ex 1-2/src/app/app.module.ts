import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesDataStorageService } from './services/movies-data-storage.services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [MoviesDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
