"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appsettings_model_1 = require("./shared/models/appsettings.model.");
var session_service_1 = require("./shared/services/session.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef, sessionService) {
        this.elementRef = elementRef;
        this.sessionService = sessionService;
        this.title = 'Caplin Systems, Incorporated.';
        // tslint:disable-next-line:prefer-const
        var native = this.elementRef.nativeElement;
        // tslint:disable-next-line:prefer-const
        var settings = native.getAttribute('settings');
        var appSettings = new appsettings_model_1.AppSettings();
        appSettings = JSON.parse(settings);
        sessionService.setAppSettings(appSettings);
        this.isAuthenicated = sessionService.isAuthenicated;
    }
    AppComponent.prototype.logout = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, session_service_1.SessionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map