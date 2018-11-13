import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';
import { UserService } from '@common/services/user.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public isWrongUserInput: boolean = false;

    constructor(private authService: AuthService,
                private fb: FormBuilder,
                private tokenService: TokenService,
                private location: Location,
                private userService: UserService) {
    }

    public get login() {
        return this.loginForm.get('login');
    }

    public get password() {
        return this.loginForm.get('password');
    }

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            login: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('^[a-zA-Z]+')
            ]],
            password: ['', [Validators.required]]
        }, { updateOn: 'blur' });
    }

    public doLogin(): void {
        const user = this.loginForm.value;

        this.authService.login(user).subscribe(
            response => {
                this.tokenService.saveToken(response.headers.get('session-token'));
                this.userService.setUser(JSON.parse(response.body));
                this.location.back();
            },
            error => {
                if (error.status === 400) {
                    this.isWrongUserInput = true;
                }
            }
        );
    }

}
