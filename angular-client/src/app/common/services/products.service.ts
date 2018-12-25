import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@common/models/product.model';
import { RequestService } from '@common/services/request.service';
import { ENDPOINTS } from '@common/constants/endpoints';
import { Gender } from '@common/enums/gender';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    public $products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    private _products: Product[] = [];

    constructor(private requestService: RequestService) {
    }

    public getProducts() {
        this.requestService.get(`${ENDPOINTS.PRODUCTS}`)
            .subscribe(products => {
                this.updateProducts(products);
            });
    }

    public applyFilter(filtersObj) {
        this.requestService.get(`/products?${this.processFilters(filtersObj)}`)
            .subscribe(products => {
                this.updateProducts(products);
            });
    }

    public deleteProduct(id) {
        this.requestService.delete(`${ENDPOINTS.PRODUCTS}/${id}`)
            .subscribe(() => this.updateProducts(this._products.filter(product => product.id !== id)));
    }

    public searchProducts(searchString) {
        this.requestService.get(`${ENDPOINTS.PRODUCTS}?q=${searchString}`)
            .subscribe(products => {
                this.updateProducts(products);
            });
    }

    private updateProducts(products: Product[]) {
        this._products = products;
        this.$products.next(this._products);
    }

    private processFilters(filtersObj): string {
        const filters = Object.entries(filtersObj);
        let queryString = '';

        for (let i = 0; i < filters.length; i++) {
            if (filters[i][0] === 'availableOnly' && filters[i][1]) {
                queryString += 'count_gte=0&';
            } else if (filters[i][0] === 'gender') {
                const genderName = filters[i][1] + '';
                queryString += `gender=${Gender[genderName]}&`;
            } else if (filters[i][0] === 'category' && filters[i][1] > -1) {
                queryString += `categoryId=${filters[i][1]}&`;
            } else if (filters[i][0] === 'rating' && filters[i][1]) {
                queryString += `rating=${filters[i][1]}&`;
            } else if (filters[i][0] === 'price' && filters[i][1].from && filters[i][1].to) {
                queryString += `cost_gte=${filters[i][1].from}&cost_lte=${filters[i][1].to}&`;
            }
        }

        return queryString;
    }
}
