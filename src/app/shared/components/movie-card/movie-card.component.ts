import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie; //parent is sending data from the parent component to child component using property binding '[]'
  // @Input() test: string;

  @Output() buyMovieEvent = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  movieClick(movie: Movie) {
    // console.log(movie);
    this.buyMovieEvent.emit(movie);
  }
}
