import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing';
import { MoviesInquiryComponent } from './movies-inquiry.component';
import { MoviesQueueComponent } from './movies-queue.component';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      MoviesRoutingModule
  ],
  declarations: [MoviesInquiryComponent, MoviesQueueComponent, MovieDetailComponent]
})
export class MoviesModule { }
