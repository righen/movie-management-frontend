import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: CreateMovieComponent },
  { path: 'movies', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
