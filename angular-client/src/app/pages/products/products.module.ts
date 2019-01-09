import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ComponentsModule } from '@common/components/components.module';
import { FilterComponent } from './products-list/components/filter/filter.component';
import { ProductCardComponent } from './products-list/components/product-card/product-card.component';
import { SearchComponent } from './products-list/components/search/search.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [
        MainLayoutComponent,
        ProductsListComponent,
        ProductDetailsComponent,
        FilterComponent,
        ProductCardComponent,
        SearchComponent
    ]
})
export class ProductsModule {
}
