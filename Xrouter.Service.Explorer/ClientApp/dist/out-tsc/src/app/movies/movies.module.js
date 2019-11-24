"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var movies_routing_1 = require("./movies-routing");
var movies_inquiry_component_1 = require("./movies-inquiry.component");
var movies_queue_component_1 = require("./movies-queue.component");
var movie_detail_component_1 = require("./movie-detail.component");
var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                movies_routing_1.MoviesRoutingModule
            ],
            declarations: [movies_inquiry_component_1.MoviesInquiryComponent, movies_queue_component_1.MoviesQueueComponent, movie_detail_component_1.MovieDetailComponent]
        })
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map