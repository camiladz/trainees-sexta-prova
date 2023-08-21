export interface CartProduct {
    id: number;
    name: string;
    imageUrl: string;
    brand: string;
    price: number;
    listPrice: number;
    isWeighable: boolean;
    unitWeight?: number;
    discount?: number;
    quantity: number
}