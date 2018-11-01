import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptor } from './auth/token-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule
    ],
    providers: [AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
