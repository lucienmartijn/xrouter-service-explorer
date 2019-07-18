import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesInquiryComponent } from './movies-inquiry.component';
import { MoviesQueueComponent } from './movies-queue.component';
import { MovieDetailComponent } from './movie-detail.component';

const moviesRoutes: Routes = [
    { path: '', component: MoviesInquiryComponent },
    { path: 'movies-inquiry', component: MoviesInquiryComponent},
    { path: 'movies-queue', component: MoviesQueueComponent },
    { path: 'movies-detail', component: MovieDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
