import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@common/models/product.model';
import { RequestService } from '@common/services/request.service';
import { ENDPOINTS } from '@common/constants/endpoints';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    public $products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    private _products: Product[] = [];

    constructor(private requestService: RequestService) {
    }

    public applyFilter(params) {
        // this.requestService.get('/products');
    }

    public searchProducts(searchString) {
        this.requestService.get(`${ENDPOINTS.PRODUCTS}?q=${searchString}`)
            .subscribe(products => {
                this._products = products;
                this.$products.next(this._products);
            });
    }
}
