import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  movie: Movie = new Movie();
  isClose: boolean;
  valueSelected: string;
  genres = new FormControl();
  submitted = false;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {}
  

  genreList: string[] = [
    'Horror',
    'Comedy',
    'Action',
    'Fantacy',
    'Thriller',
    'Romantic',
  ];

  onSubmit() {
    this.movie.genres = this.valueSelected
      .substring(0, this.valueSelected.length)
      .split(',');
    console.log(this.movie.genres);

    if (this.movie.title == null || this.movie.title.trim() == '') {
      Swal.fire('Invalid Title', 'Entered Title is Invalid!!', 'error');
      return;
    }

    if (this.movie.summary == null || this.movie.summary.trim() == '') {
      Swal.fire('Invalid Summary', 'Entered Summary is Invalid!!', 'error');
      return;
    }

    if (this.movie.releaseDate == null) {
      Swal.fire('Invalid Date', 'Entered Date is Invalid!!', 'error');
      return;
    }

    if (this.movie.genres.length == null) {
      Swal.fire('Invalid Genre', 'Entered Genre is Invalid!!', 'error');
      return;
    }

    this.movieService.createMovie(this.movie).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Movie added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Invalid Movie Details', 'Please Try again!', 'error');
      }
    );
  }

  comboChange(event) {
    this.isClose = false;
    if (!event) {
      this.isClose = true;
      console.log('dropdown is closed');
      this.valueSelected = this.genres.value && this.genres.value.toString();
    }
  }
}
