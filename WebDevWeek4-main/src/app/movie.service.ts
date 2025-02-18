import { Injectable } from '@angular/core';
import { Movie } from './movie.model'; 

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  moviesList = [
    new Movie("The Godfather", "1972", "Francis Ford Coppola"),
    new Movie("Millers Crossing", "1990", "The Coen Brothers"),
    new Movie("Dial M for Murder", "1954", "Alred Hitchcock"),
    new Movie("Whiplash", "2014", "Damien Chazelle")
  ];
addMovie(movietitle:string, moviedirector:string, movieyear:string) {
  this.moviesList.push({title:movietitle,director:moviedirector,year:movieyear})
}
  getMovies() {
    return this.moviesList;
  }
}
