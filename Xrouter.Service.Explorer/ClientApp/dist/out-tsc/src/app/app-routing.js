"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_component_1 = require("./home/about.component");
var contact_component_1 = require("./home/contact.component");
var home_component_1 = require("./home/home.component");
exports.AppRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'home/home', component: home_component_1.HomeComponent },
    { path: 'home/contact', component: contact_component_1.ContactComponent },
    { path: 'home/about', component: about_component_1.AboutComponent },
    { path: 'movies', loadChildren: '../app/movies/movies.module#MoviesModule' }
];
//# sourceMappingURL=app-routing.js.map