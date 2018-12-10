import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup, ValidationErrors,
    ValidatorFn,
    Validators
} from '@angular/forms';

import { Category } from '@common/models/category.model';
import { CategoriesService } from '@common/services/categories.service';
import { ProductsService } from '@common/services/products.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    public filtersForm: FormGroup;

    public isFiltersExpanded: boolean;

    public categories: Category[];

    constructor(private formBuilder: FormBuilder,
                private categoriesService: CategoriesService,
                private productsService: ProductsService) {
    }

    public get rating() {
        return this.filtersForm.controls['rating'];
    }

    public get price() {
        return this.filtersForm.controls['price'];
    }

    public ngOnInit() {
        this.categoriesService.getCategories()
            .subscribe(fetchedCategories => {
                this.categories = fetchedCategories;
                this.initForm();
            });
    }

    public toggleFilters(): void {
        this.isFiltersExpanded = !this.isFiltersExpanded;
    }

    public onApply() {
        const filters = this.filtersForm.value;

        // this.productsService.applyFilter(filters);
    }

    public onClear() {
        this.filtersForm.patchValue({
            availableOnly: false,
            gender: 'unisex',
            category: -1,
            rating: 1
        });
        this.filtersForm.controls['price'].patchValue({
            from: 0,
            to: 0
        });
    }

    private initForm(): void {
        const availableControl = this.formBuilder.control(false);
        const genderControl = this.formBuilder.control('unisex');
        const categoriesControl = this.formBuilder.control(-1);
        const ratingControl = this.formBuilder.control(1,
            [Validators.min(1), Validators.max(5)]
        );
        const priceGroup = this.formBuilder.group({
            from: this.formBuilder.control(0, [Validators.min(0)]),
            to: this.formBuilder.control(0, [Validators.min(0)])
        }, { updateOn: 'blur' });

        priceGroup.setValidators(this.priceValidator());

        this.filtersForm = this.formBuilder.group({
            availableOnly: availableControl,
            gender: genderControl,
            category: categoriesControl,
            rating: ratingControl,
            price: priceGroup
        });
    }

    private priceValidator(): ValidatorFn {
        return (group: FormGroup): ValidationErrors => {
            const fromControl = group.controls['from'];
            const toControl = group.controls['to'];
            if (fromControl.value > toControl.value) {
                fromControl.setErrors({ biggerThanTo: true });
            } else {
                fromControl.setErrors(null);
            }
            return;
        };
    }

}
