import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-products-layout',
    templateUrl: './products-layout.component.html',
    styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent implements OnInit {

    public userName: string = 'test';

    constructor(private _userService: UserService) {
    }

    public ngOnInit(): void {

        this.userName = this._userService.getLoggedUserName();
    }

}
