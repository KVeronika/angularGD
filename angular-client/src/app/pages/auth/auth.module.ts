import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from '@common/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        ComponentsModule
    ],
    declarations: [LoginPageComponent]
})
export class AuthModule {
}
