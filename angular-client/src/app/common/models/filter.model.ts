export class FilterModel {
    availableOnly?: boolean;
    gender?: 'unisex' | 'male' | 'female';
    category?: number;
    rating?: number;
    price?: {from: number, to: number};
}
