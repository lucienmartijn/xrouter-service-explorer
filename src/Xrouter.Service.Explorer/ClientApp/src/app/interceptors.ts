import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './shared/error-handling/http-error.interceptor';
import { HttpRequestTimeInterceptor } from './shared/http-responsetime-logging/http-responsetime-logging.interceptor';

export const interceptorProviders = 
   [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestTimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];