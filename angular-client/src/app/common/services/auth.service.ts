import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUser } from '@common/interfaces/user.interface';
import { RequestService } from '@common/services/request.service';
import { TokenService } from '@common/services/token.service';
import { UserService } from '@common/services/user.service';
import { CONSTANTS } from '@common/constants/constants';
import { ENDPOINTS } from '@common/constants/endpoints';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private requestService: RequestService,
                private tokenService: TokenService,
                private userService: UserService) {
    }

    public login(user: IUser): Observable<HttpResponse<string>> {
        const options = { responseType: 'text', observe: 'response' };

        return this.requestService.post(ENDPOINTS.LOGIN, user, options)
            .pipe(
                tap(response => {
                    const token = response.headers.get(CONSTANTS.TOKEN_NAME);
                    const userResp = JSON.parse(response.body);

                    this.tokenService.saveToken(token);
                    this.userService.setUser(userResp);
                })
            );
    }

    public logout(login: string): Observable<HttpResponse<string>> {
        const options = { responseType: 'text', observe: 'response' };

        return this.requestService.post(ENDPOINTS.LOGOUT, { login }, options)
            .pipe(
                tap(() => this.tokenService.removeToken())
            );
    }

}
