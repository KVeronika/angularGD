import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsLayoutComponent } from './products-layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductsLayoutComponent,
        ProductsListComponent,
        ProductDetailsComponent,
    ]
})
export class ProductsModule {
}
