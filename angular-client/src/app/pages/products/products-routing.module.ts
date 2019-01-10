import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductInfoResolverService } from '@common/services/product-info-resolver.service';
import { AddEditProductComponent } from '@pages/products/product-details/components/add-edit-product/add-edit-product.component';
import { AdminGuard } from '@common/guards/admin.guard';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent
            },
            {
                path: 'products',
                redirectTo: '/',
                pathMatch: 'full'
            },
            {
                path: 'product-details/:id',
                component: ProductDetailsComponent,
                resolve: {
                    product: ProductInfoResolverService
                }
            },
            {
                path: 'product-details/:id/:mode',
                component: AddEditProductComponent,
                canActivate: [AdminGuard],
                resolve: {
                    product: ProductInfoResolverService
                }
            },
            {
                path: 'add-product',
                component: AddEditProductComponent,
                canActivate: [AdminGuard],
                resolve: {
                    product: ProductInfoResolverService
                }
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
