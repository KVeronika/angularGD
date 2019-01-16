import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Category } from '@common/models/category.model';

@Component({
    selector: 'app-category-input',
    templateUrl: './category-input.component.html',
    styleUrls: ['./category-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CategoryInputComponent),
        multi: true
    }]
})
export class CategoryInputComponent implements ControlValueAccessor {

    @Input()
    public categories: Category[];

    @Input()
    public predefinedCategoryId?: number;

    public value: number = this.predefinedCategoryId || -1;

    public onChange = (category: number) => {};

    public onTouched = (_?: any) => {};

    public writeValue(category: number): void {
        this.value = category;
    }

    public onSelect(event): void {
        const category = +event.target.value;

        this.value = category;
        this.onChange(category);
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
