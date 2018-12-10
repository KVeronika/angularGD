import { Component } from '@angular/core';
import { ProductsService } from '@common/services/products.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    public searchString: string = '';

    constructor(private productsService: ProductsService) {}

    public doSearch(): void {
        this.productsService.searchProducts(this.searchString);
    }

}
