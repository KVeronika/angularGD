import { Injectable } from '@angular/core';

import { User } from '@common/models/user.model';
import { UserType } from '@common/enums/userType';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private tokenService: TokenService) {
    }

    public get user(): User {
        return this.tokenService.getUser();
    }

    public getLoggedUserName(): string {
        return this.user ? this.user.login : '';
    }

    public setUser(user: User): void {
        this.tokenService.saveUser(user);
    }

    public isAdmin(): boolean {
        return this.user.roleId === UserType.admin;
    }

}
