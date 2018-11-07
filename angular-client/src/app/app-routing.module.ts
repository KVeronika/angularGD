import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from './auth/logged-in.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: ProductsListComponent
    },
    {
        path: 'login',
        canActivate: [LoggedInGuard],
        loadChildren: './auth/auth.module#AuthModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
