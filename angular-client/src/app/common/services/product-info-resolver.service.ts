import { Injectable } from '@angular/core';
import { mergeMap, take } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';

import { Product } from '@common/models/product.model';
import { ProductsService } from '@common/services/products.service';

@Injectable({
    providedIn: 'root'
})
export class ProductInfoResolverService implements Resolve<Product> {

    constructor(private productsService: ProductsService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = +route.paramMap.get('id');

        if (id > -1) {
            return this.productsService.getProductById(id).pipe(
                take(1),
                mergeMap(product => {
                    if (product) {
                        return of(product);
                    } else {
                        this.router.navigate(['/']);
                        return EMPTY;
                    }
                })
            );
        } else {
            return of(new Product());
        }
    }
}
