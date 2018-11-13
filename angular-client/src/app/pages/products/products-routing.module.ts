import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsLayoutComponent } from '@layouts/main-layout/products-layout.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsLayoutComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent
            },
            {
                path: 'product-details',
                component: ProductDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
