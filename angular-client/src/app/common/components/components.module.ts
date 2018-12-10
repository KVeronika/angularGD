import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '@common/components/logo/logo.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { CategoryInputComponent } from './category-input/category-input.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LogoComponent,
        GenderInputComponent,
        CategoryInputComponent
    ],
    exports: [
        LogoComponent,
        GenderInputComponent,
        CategoryInputComponent
    ]
})
export class ComponentsModule {
}
