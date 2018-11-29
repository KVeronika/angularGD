import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.tokenService.getToken()) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
                .catch(err => console.log(err));

            return false;
        }

        return true;
    }
}
