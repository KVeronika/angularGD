import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth/auth.service';
import { TokenService } from '../auth/token.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products-layout',
    templateUrl: './products-layout.component.html',
    styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent implements OnInit {

    public userName: string = 'test';

    constructor(private _userService: UserService,
                private _authService: AuthService,
                private _tokenService: TokenService,
                private _router: Router) {
    }

    public ngOnInit(): void {
        this.userName = this._userService.getLoggedUserName();
    }

    public doLogout() {
        this._authService.logout(this.userName).subscribe((response) => {
            this._tokenService.removeToken();
            this._router.navigate(['/login']);
        });
    }

}
