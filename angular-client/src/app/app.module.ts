import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from '@common/services/interceptors/token-interceptor.service';
import { ErrorInterceptor } from '@common/services/interceptors/error-interceptor.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
