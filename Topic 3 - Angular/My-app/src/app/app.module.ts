import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { FormsModule } from '@angular/forms';
import { MovieAdderComponent } from './movie-adder/movie-adder.component';
import { MoviesDataStorageService } from './services/movies-data-storage.services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetailsComponent,
    MovieEditorComponent,
    MovieAdderComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [MoviesDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
