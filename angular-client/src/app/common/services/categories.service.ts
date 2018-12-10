import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '@common/services/request.service';
import { Category } from '@common/models/category.model';
import { ENDPOINTS } from '@common/constants/endpoints';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    constructor(private requestService: RequestService) {}

    public getCategories(): Observable<Category[]> {
        return this.requestService.get(ENDPOINTS.CATEGORIES);
    }
}
