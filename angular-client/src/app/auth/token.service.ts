import { Injectable } from '@angular/core';

import { Constants } from '../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public saveToken(data: string): void {
        localStorage.setItem(Constants.TOKEN_NAME, data);
    }

    public removeToken(): void {
        localStorage.removeItem(Constants.TOKEN_NAME);
    }

    public getToken(): string {
        return localStorage.getItem(Constants.TOKEN_NAME) || '';
    }
}
