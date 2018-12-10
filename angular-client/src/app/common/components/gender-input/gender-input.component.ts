import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type TGender = 'unisex' | 'male' | 'female';

@Component({
    selector: 'app-gender-input',
    templateUrl: './gender-input.component.html',
    styleUrls: ['./gender-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => GenderInputComponent),
        multi: true
    }]
})
export class GenderInputComponent implements ControlValueAccessor {

    public genders: TGender[] = ['male', 'female', 'unisex'];

    public value: TGender;

    public onChange = (gender: TGender) => {};

    public onTouched = (_?: any) => {};

    writeValue(gender: TGender): void {
        this.value = gender;
    }

    public onRadioChange(gender: TGender) {
        this.value = gender;
        this.onChange(gender);
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
