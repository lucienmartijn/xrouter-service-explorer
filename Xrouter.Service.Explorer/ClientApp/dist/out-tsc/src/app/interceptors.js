"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var http_error_interceptor_1 = require("./shared/error-handling/http-error.interceptor");
var http_responsetime_logging_interceptor_1 = require("./shared/http-responsetime-logging/http-responsetime-logging.interceptor");
exports.interceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: http_responsetime_logging_interceptor_1.HttpRequestTimeInterceptor, multi: true },
    { provide: http_1.HTTP_INTERCEPTORS, useClass: http_error_interceptor_1.HttpErrorInterceptor, multi: true },
];
//# sourceMappingURL=interceptors.js.map