import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.model';
import { FormControl } from '@angular/forms';
import { Genre } from 'src/app/model/genre.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie;
  valueSelected: string;
  isClose: boolean;
  genre: Genre;

  constructor(private movieService: MovieService, private router: Router) {
    setTimeout(function () {
      $(function () {
        $('#example').DataTable();
      });
    }, 100);
  }

  ngOnInit() {
    this.getMovies();
  }
  genres = new FormControl();

  genreList: string[] = [
    'Horror',
    'Comedy',
    'Action',
    'Fantacy',
    'Thriller',
    'Romantic',
  ];
  getMovies() {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => console.log(error)
    );
  }

  getMoviesByGenres() {
    this.movieService.getMoviesByGenres(this.valueSelected).subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => console.log(error)
    );
  }
  comboChange(event) {
    this.isClose = false;
    if (!event) {
      this.isClose = true;
      this.valueSelected = this.genres.value && this.genres.value.toString();
      this.getMoviesByGenres();
    }
  }
}
