import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: ProductsListComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
