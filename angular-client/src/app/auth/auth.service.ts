import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from './user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _http: HttpClient) {
    }

    public login(user: IUser): Observable<HttpResponse<string>> {
        return this._http.post(`${environment.BASE_URL}/login`, user,
            {responseType: 'text', observe: 'response'});
    }
}
