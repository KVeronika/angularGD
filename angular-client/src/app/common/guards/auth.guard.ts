import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.tokenService.getToken()) {
            this.router.navigate(['/login'])
                .catch(err => console.log(err));
            return false;
        }

        return true;
    }
}
