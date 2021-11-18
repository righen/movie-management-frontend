import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './service/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, CreateMovieComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
