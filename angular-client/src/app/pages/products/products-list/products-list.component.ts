import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '@common/services/products.service';
import { Product } from '@common/models/product.model';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

    public products: Product[];

    private productsSub: Subscription;

    constructor(private productService: ProductsService) { }

    public ngOnInit() {
        this.productsSub = this.productService.$products.subscribe(products => this.products = products);
        this.productService.getProducts();
    }

    public ngOnDestroy() {
        this.productsSub.unsubscribe();
    }

    public deleteProduct(id: number) {
        this.productService.deleteProduct(id);
    }

}
