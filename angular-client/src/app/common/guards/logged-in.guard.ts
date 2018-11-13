import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private location: Location) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.tokenService.getToken()) {
            this.location.back();
            return false;
        }

        return true;
    }
}
