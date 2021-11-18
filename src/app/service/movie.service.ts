import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from './../model/movie.model';
import { Genre } from 'src/app/model/genre.model';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl + '/api/movies';

  getMovies(): any {
    return this.http.get(this.baseUrl);
  }

  getMoviesByGenres(name):any {
    return this.http.get("http://localhost:8888/api/movies/Genre/"+name);
  }

  createMovie(movie: Movie): any {
    return this.http.post(this.baseUrl, movie);
  }
}
