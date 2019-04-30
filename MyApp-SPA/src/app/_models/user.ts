export interface User {
    id: number;
    userName: string;
    gender?: string;
    age?: number;
    dateCreated: Date;
    lastActive: Date;
    phone: string;
    email: string;
    address?: string;
    city?: string;
    country?: string;
}
