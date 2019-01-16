import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '@common/models/product.model';
import { UserService } from '@common/services/user.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input()
    public product: Product;

    @Output()
    public deleteProduct: EventEmitter<number> = new EventEmitter<number>();

    public isAdmin: boolean;

    constructor(private userService: UserService) {}

    public ngOnInit() {
        this.isAdmin = this.userService.isAdmin();
    }

    public onDelete(id): void {
        this.deleteProduct.emit(id);
    }

}
