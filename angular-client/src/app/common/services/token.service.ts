import { Injectable } from '@angular/core';

import { CONSTANTS } from '@common/constants/constants';
import { IUser } from '@common/interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public saveToken(data: string): void {
        localStorage.setItem(CONSTANTS.TOKEN_NAME, data);
    }

    public saveUser(data: IUser): void {
        localStorage.setItem(CONSTANTS.USER_DATA, JSON.stringify(data));
    }

    public removeToken(): void {
        localStorage.removeItem(CONSTANTS.TOKEN_NAME);
    }

    public getToken(): string {
        return localStorage.getItem(CONSTANTS.TOKEN_NAME) || '';
    }

    public getUser(): IUser {
        return JSON.parse(localStorage.getItem(CONSTANTS.USER_DATA));
    }
}
