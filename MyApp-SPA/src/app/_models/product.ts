import { ProductStatus } from './enums';

export interface Product {
    id: number;
    name: string;
    smallImage: string;
    bigImage: string;
    title: string;
    description: string;
    price: number;
    status: ProductStatus;
    productCategory: ProductCategory;
}

export interface ProductCategory {
    id: number;
    name: string;
}


