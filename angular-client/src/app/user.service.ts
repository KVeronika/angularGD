import { Injectable } from '@angular/core';
import { IUser } from './auth/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: IUser;

    public getLoggedUserName(): string {
        return this.user.login;
    }

    public setUser(user: IUser): void {
        this.user = user;
    }

}
