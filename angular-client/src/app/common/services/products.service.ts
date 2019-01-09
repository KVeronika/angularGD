import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@common/models/product.model';
import { RequestService } from '@common/services/request.service';
import { ENDPOINTS } from '@common/constants/endpoints';
import { Gender } from '@common/enums/gender';
import { FilterModel } from '@common/models/filter.model';

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

    public getProductById(id: number) {
        return this.requestService.get(`${ENDPOINTS.PRODUCTS}/${id}`);
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

    private processFilters(filters: FilterModel): string {
        let queryString = '';

        if (filters.availableOnly) {
            queryString += 'count_gte=0&';
        }
        if (filters.category > -1) {
            queryString += `categoryId=${filters.category}&`;
        }
        if (filters.rating) {
            queryString += `rating=${filters.rating}&`;
        }
        if (filters.price.from && filters.price.to) {
            queryString += `cost_gte=${filters.price.from}&cost_lte=${filters.price.to}&`;
        }
        queryString += `gender=${Gender[filters.gender]}&`;

        return queryString;
    }
}
