import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient) {
    }

    public post(relativeUrl: string, data: object, options: object): Observable<HttpResponse<string>> {
        const url = `${environment.BASE_URL}${relativeUrl}`;

        return this.http.post<HttpResponse<string>>(url, data, options);
    }

}
