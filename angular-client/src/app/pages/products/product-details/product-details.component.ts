import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '@common/models/product.model';
import { Category } from '@common/models/category.model';
import { CategoriesService } from '@common/services/categories.service';
import { UserService } from '@common/services/user.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product;
    public categories: Category[];
    public isAdmin: boolean;

    constructor(private route: ActivatedRoute,
                private categoriesService: CategoriesService,
                private router: Router,
                private userService: UserService) {}

    public get categoryName() {
        return this.categories && this.categories.find(category => category.id === this.product.categoryId).name;
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { product: Product }) => {
                this.product = data.product;
            });
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
        this.isAdmin = this.userService.isAdmin();
    }

    public onEditBtnClick(): void {
       this.router.navigate([`/product-details/${this.product.id}/edit`]);
    }

}
