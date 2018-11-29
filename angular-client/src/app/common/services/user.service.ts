import { Injectable } from '@angular/core';

import { IUser } from '@common/interfaces/user.interface';
import { UserType } from '@common/enums/userType';
import { TokenService } from '@common/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private tokenService: TokenService) {
    }

    public get user(): IUser {
        return this.tokenService.getUser();
    }

    public getLoggedUserName(): string {
        return this.user ? this.user.login : '';
    }

    public setUser(user: IUser): void {
        this.tokenService.saveUser(user);
    }

    public isAdmin(): boolean {
        return this.user.roleId === UserType.admin;
    }

}
