import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from './movie.model';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AddMovieComponent, ListMoviesComponent, MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list';

  public mySelectedMovie!:Movie;

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie=movie;
  }
}
