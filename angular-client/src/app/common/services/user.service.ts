import { Injectable } from '@angular/core';

import { IUser } from '@common/interfaces/user.interface';

enum userType {
    user = 0,
    admin = 1
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: IUser;

    public getLoggedUserName(): string {
        return this.user ? this.user.login : 'Test';
    }

    public setUser(user: IUser): void {
        this.user = user;
    }

    public isAdmin(): boolean {
        return this.user.roleId === userType.admin;
    }

}
