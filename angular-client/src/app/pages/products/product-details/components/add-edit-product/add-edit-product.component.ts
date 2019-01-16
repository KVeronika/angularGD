import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { Category } from '@common/models/category.model';
import { Product } from '@common/models/product.model';
import { CategoriesService } from '@common/services/categories.service';
import { Gender } from '@common/enums/gender';
import { ProductsService } from '@common/services/products.service';

const enum Mode {
    edit = 'edit',
    create =  'create'
}

@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

    public product: Product;

    public categories: Category[];

    public productForm: FormGroup;

    public mode: string;

    constructor(private route: ActivatedRoute,
                private categoriesService: CategoriesService,
                private productsService: ProductsService,
                private formBuilder: FormBuilder,
                private location: Location) {}

    public ngOnInit(): void {
        this.route.data
            .subscribe((data: { product: Product }) => {
                this.product = data.product;
                this.initForm();
            });
        this.mode = this.route.snapshot.paramMap.get('mode') || Mode.create;
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    public onProductSave() {
        const updatedProduct = Object.assign(Object.assign({}, this.product), this.productForm.value);

        if (this.mode === Mode.create) {
            this.productsService.createProduct(updatedProduct);
        } else {
            this.productsService.updateProduct(updatedProduct);
        }
        this.location.back();
    }

    public onCancel() {
        this.location.back();
    }

    private initForm() {
        const genderIndex = Object.values(Gender).indexOf(this.product.gender);
        const nameControl = this.formBuilder.control(this.product.name);
        const descriptionControl = this.formBuilder.control(this.product.description);
        const costControl = this.formBuilder.control(this.product.cost);
        const genderControl = this.formBuilder.control(Object.keys(Gender)[genderIndex]);
        const categoryControl = this.formBuilder.control(this.product.categoryId);

        this.productForm = this.formBuilder.group({
            name: nameControl,
            description: descriptionControl,
            cost: costControl,
            gender: genderControl,
            categoryId: categoryControl
        });
    }

}
