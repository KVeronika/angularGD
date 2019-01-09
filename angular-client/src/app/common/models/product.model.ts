export class Product {
    id: number;
    categoryId: number;
    image: string;
    name: string;
    description: string;
    cost: number;
    rating: number;
    gender: string;
    count: number;
    soldCount: number;

    constructor() {
        this.categoryId = -1;
        this.image = './src/assets/images/noimage.jpg';
        this.name = '';
        this.description = '';
        this.cost = 0;
        this.rating = 0;
        this.gender = 'unisex';
    }

}
