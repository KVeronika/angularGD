import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '@common/models/product.model';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

    @Input()
    public product: Product;

    @Output()
    public deleteProduct: EventEmitter<number> = new EventEmitter<number>();

    public onDelete(id): void {
        this.deleteProduct.emit(id);
    }

}
