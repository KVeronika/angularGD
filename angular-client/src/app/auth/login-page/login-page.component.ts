import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';
import { IUser } from '../user.interface';
import { TokenService } from '../token.service';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public isWrongUserInput: boolean = false;

    constructor(private _authService: AuthService,
                private _fb: FormBuilder,
                private _tokenService: TokenService,
                private _location: Location,
                private _userServise: UserService) {
    }

    public get login() {
        return this.loginForm.get('login');
    }

    public get password() {
        return this.loginForm.get('password');
    }

    public ngOnInit(): void {
        this.loginForm = this._fb.group({
            login: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('^[a-zA-Z]+')
            ]],
            password: ['', [Validators.required]]
        }, { updateOn: 'blur' });
    }

    public doLogin(): void {
        const user: IUser = this.loginForm.value;

        this._authService.login(user).subscribe(
            response => {
                this._tokenService.saveToken(response.headers.get('session-token'));
                this._userServise.setUser(user);
                this._location.back();
            },
            error => {
                if (error.status === 400) {
                    this.isWrongUserInput = true;
                }
            }
        );
    }

}
