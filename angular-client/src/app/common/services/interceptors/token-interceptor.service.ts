import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANTS } from '@common/constants/constants';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            headers: req.headers.append(CONSTANTS.TOKEN_NAME, this.tokenService.getToken())
        });

        return next.handle(request);
    }
}
