import { Routes } from '@angular/router';
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home/home', component: HomeComponent },
    { path: 'home/contact', component: ContactComponent },
    { path: 'home/about', component: AboutComponent },
    { path: 'movies', loadChildren: '../app/movies/movies.module#MoviesModule' }
];

