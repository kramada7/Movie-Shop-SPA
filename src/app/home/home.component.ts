import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopGrossingMovies().subscribe(
      m => {
        this.movies = m;
        console.table(this.movies);
      }
    );
  }

  buyMovie(movie: Movie) {
    console.log("this is a string");
    console.log(movie);
    // CHILD COMPONENT
    // in the child component, create output decorator to emit event using EventEmitter
    // for example in child component, we want to send data to parent component when we click on the button
    // your child click method should emit data using 'emit' method

    // PARENT COMPONENT
    // since output is an event, we use normal bracket in parent component to subscribe to that event and the data will be inside '$event'
  }

}
