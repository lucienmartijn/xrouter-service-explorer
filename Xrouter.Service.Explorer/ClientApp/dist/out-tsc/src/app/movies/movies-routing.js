"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movies_inquiry_component_1 = require("./movies-inquiry.component");
var movies_queue_component_1 = require("./movies-queue.component");
var movie_detail_component_1 = require("./movie-detail.component");
var moviesRoutes = [
    { path: '', component: movies_inquiry_component_1.MoviesInquiryComponent },
    { path: 'movies-inquiry', component: movies_inquiry_component_1.MoviesInquiryComponent },
    { path: 'movies-queue', component: movies_queue_component_1.MoviesQueueComponent },
    { path: 'movies-detail', component: movie_detail_component_1.MovieDetailComponent }
];
var MoviesRoutingModule = /** @class */ (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(moviesRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
exports.MoviesRoutingModule = MoviesRoutingModule;
//# sourceMappingURL=movies-routing.js.map