import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@common/services/user.service';
import { AuthService } from '@common/services/auth.service';
import { TokenService } from '@common/services/token.service';
import { LogoSize } from '@common/enums/logoSize';
import { APP_ROUTES } from '@common/constants/routes';

@Component({
    selector: 'app-products-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

    public userName: string;
    public logoSize: number = LogoSize.small;

    constructor(private userService: UserService,
                private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.userName = this.userService.getLoggedUserName();
    }

    public doLogout() {
        this.authService.logout(this.userName)
            .subscribe(() => this.router.navigate([APP_ROUTES.LOGIN_PAGE]));
    }

}
