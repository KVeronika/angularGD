import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@common/guards/auth.guard';
import { LoggedInGuard } from '@common/guards/logged-in.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: '@pages/products/products.module#ProductsModule'
    },
    {
        path: 'login',
        canActivate: [LoggedInGuard],
        loadChildren: '@pages/auth/auth.module#AuthModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
