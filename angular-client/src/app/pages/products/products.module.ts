import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ComponentsModule } from '@common/components/components.module';

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
    ]
})
export class ProductsModule {
}
