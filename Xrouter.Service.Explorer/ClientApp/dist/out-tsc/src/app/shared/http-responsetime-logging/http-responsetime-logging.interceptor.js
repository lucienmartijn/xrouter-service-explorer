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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var responsetime_service_1 = require("../services/responsetime.service");
var HttpRequestTimeInterceptor = /** @class */ (function () {
    function HttpRequestTimeInterceptor(responseTimeService) {
        this.responseTimeService = responseTimeService;
    }
    HttpRequestTimeInterceptor.prototype.intercept = function (req, next) {
        var startTime = (new Date()).getTime();
        return next.handle(req).pipe(operators_1.map(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var endTime = (new Date()).getTime();
                event = event.clone({ headers: event.headers.set('endTime', endTime.toString()) });
                event = event.clone({ headers: event.headers.set('startTime', startTime.toString()) });
                var diff = endTime - startTime;
                console.log(event.url + " succeeded in " + diff + " milli seconds");
            }
            return event;
        }), operators_1.tap(function (event) { }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                var endTime = (new Date()).getTime();
                var diff = endTime - startTime;
                console.log(error.url + " failed in " + diff + " milli seconds");
            }
        }));
    };
    HttpRequestTimeInterceptor = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [responsetime_service_1.ResponseTimeService])
    ], HttpRequestTimeInterceptor);
    return HttpRequestTimeInterceptor;
}());
exports.HttpRequestTimeInterceptor = HttpRequestTimeInterceptor;
//# sourceMappingURL=http-responsetime-logging.interceptor.js.map