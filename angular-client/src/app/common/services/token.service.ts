import { Injectable } from '@angular/core';

import { CONSTANTS } from '@common/constants/constants';
import { User } from '@common/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public saveToken(data: string): void {
        localStorage.setItem(CONSTANTS.TOKEN_NAME, data);
    }

    public saveUser(data: User): void {
        localStorage.setItem(CONSTANTS.USER_DATA, JSON.stringify(data));
    }

    public removeToken(): void {
        localStorage.removeItem(CONSTANTS.TOKEN_NAME);
    }

    public getToken(): string {
        return localStorage.getItem(CONSTANTS.TOKEN_NAME) || '';
    }

    public getUser(): User {
        return JSON.parse(localStorage.getItem(CONSTANTS.USER_DATA));
    }
}
