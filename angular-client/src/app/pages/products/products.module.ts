import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ComponentsModule } from '@common/components/components.module';
import { FilterComponent } from './products-list/components/filter/filter.component';
import { ProductCardComponent } from './products-list/components/product-card/product-card.component';
import { EditProductComponent } from './product-details/components/edit-product/edit-product.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ComponentsModule
    ],
    declarations: [
        MainLayoutComponent,
        ProductsListComponent,
        ProductDetailsComponent,
        FilterComponent,
        ProductCardComponent,
        EditProductComponent,
    ]
})
export class ProductsModule {
}
