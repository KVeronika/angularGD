import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService,
                private _tokenService: TokenService,
                private _router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!this._tokenService.getToken()) {
            this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        return true;
    }
}
