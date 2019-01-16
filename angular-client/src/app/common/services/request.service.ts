import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private readonly OPTIONS: object = { responseType: 'text', observe: 'response' };

    constructor(private http: HttpClient) {
    }

    public get(relativeUrl: string): Observable<any> {
        return this.http.get(`${environment.BASE_URL}${relativeUrl}`);
    }

    public post(relativeUrl: string, data: object): Observable<HttpResponse<string>> {
        const url = `${environment.BASE_URL}${relativeUrl}`;

        return this.http.post<HttpResponse<string>>(url, data, this.OPTIONS);
    }

    public put(relativeUrl: string, data: object): Observable<HttpResponse<string>> {
        const url = `${environment.BASE_URL}${relativeUrl}`;

        return this.http.put<HttpResponse<string>>(url, data, this.OPTIONS);
    }

    public delete(relativeUrl: string): Observable<HttpResponse<string>> {
        const url = `${environment.BASE_URL}${relativeUrl}`;

        return this.http.delete<HttpResponse<string>>(url);
    }

}
