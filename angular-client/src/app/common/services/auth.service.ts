import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IUser } from '@common/interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public login(user: IUser): Observable<HttpResponse<string>> {
        return this.http.post(`${environment.BASE_URL}/login`, user,
            { responseType: 'text', observe: 'response' });
    }

    public logout(login: string): Observable<HttpResponse<string>> {
        return this.http.post(`${environment.BASE_URL}/logout`, {login},
            { responseType: 'text', observe: 'response' });
    }

}
