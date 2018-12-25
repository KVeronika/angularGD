import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '@common/services/token.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@common/constants/routes';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService,
                private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.tokenService.removeToken();
                        this.router.navigate([APP_ROUTES.LOGIN_PAGE]);
                    }

                    return throwError(error);
                })
            );
    }
}
