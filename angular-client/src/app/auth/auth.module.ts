import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [LoginPageComponent]
})
export class AuthModule {
}
