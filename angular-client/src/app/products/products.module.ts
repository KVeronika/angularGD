import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsLayoutComponent } from './products-layout.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductsLayoutComponent,
        ProductsListComponent,
    ]
})
export class ProductsModule {
}
