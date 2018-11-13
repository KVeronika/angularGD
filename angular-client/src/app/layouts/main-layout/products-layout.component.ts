import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@common/services/user.service';
import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';

@Component({
    selector: 'app-products-layout',
    templateUrl: './products-layout.component.html',
    styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent implements OnInit {

    public userName: string = 'test';

    constructor(private userService: UserService,
                private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.userName = this.userService.getLoggedUserName();
    }

    public doLogout() {
        this.authService.logout(this.userName).subscribe((response) => {
            this.tokenService.removeToken();
            this.router.navigate(['/login']);
        });
    }

}
