import { OrderStatus } from './enums';
import { Product } from './product';

export interface Order {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    status: OrderStatus;
    totalAmount: number;
}

export interface OrderDetails {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    status: OrderStatus;
    totalAmount: number;
    orderItems: OrderItem[];
}

export interface OrderItem {
    id: number;
    quantity: number;
    product: Product;
}
