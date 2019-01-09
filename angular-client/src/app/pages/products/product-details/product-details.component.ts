import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@common/models/product.model';
import { Category } from '@common/models/category.model';
import { CategoriesService } from '@common/services/categories.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product;

    public categories: Category[];

    public inViewMode: boolean;

    constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {}

    public get categoryName() {
        return this.categories && this.categories.find(category => category.id === this.product.categoryId).name;
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { product: Product }) => {
                this.product = data.product;
                this.inViewMode = this.product.id >= 0;
            });
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

}
