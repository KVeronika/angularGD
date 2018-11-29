import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '@common/services/auth.service';
import { LogoSize } from '@common/enums/logoSize';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public isWrongUserInput: boolean = false;
    public logoSize: number = LogoSize.large;

    constructor(private authService: AuthService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
    }

    public get login() {
        return this.loginForm.get('login');
    }

    public get password() {
        return this.loginForm.get('password');
    }

    public ngOnInit(): void {
        this.initLoginForm();
    }

    public doLogin(): void {
        const user = this.loginForm.value;

        this.authService.login(user)
            .subscribe(
                () => this.router.navigate([this.route.snapshot.queryParams.returnUrl]),
                error => this.handleError(error),
            );
    }

    private initLoginForm(): void {
        const loginControl = this.fb.control('', [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z]+')
        ]);
        const passwordControl = this.fb.control('', [Validators.required]);

        this.loginForm = this.fb.group({
            login: loginControl,
            password: passwordControl
        }, { updateOn: 'blur' });
    }

    private handleError(error): void {
        if (error.status === 400) {
            this.isWrongUserInput = true;
        }
    }

}
