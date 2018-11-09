import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsLayoutComponent } from './products-layout.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
