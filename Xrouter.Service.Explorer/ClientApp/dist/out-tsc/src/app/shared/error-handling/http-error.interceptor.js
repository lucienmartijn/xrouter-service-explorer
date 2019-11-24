"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor() {
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(operators_1.catchError(function (error) {
            var errorMessage = '';
            console.log(error);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = error.error;
            }
            return rxjs_1.throwError(errorMessage);
        }));
    };
    return HttpErrorInterceptor;
}());
exports.HttpErrorInterceptor = HttpErrorInterceptor;
//# sourceMappingURL=http-error.interceptor.js.map