import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(private _authService: AuthService,
                private _tokenService: TokenService,
                private _location: Location) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this._tokenService.getToken()) {
            this._location.back();
            return false;
        }

        return true;
    }
}
