import { IEbike } from './ebike';

export interface IUser {
    name: string;
    email: string;
    cart: IEbike[];
    wishlist: IEbike[];
    selling: IEbike[];
    owned: IEbike[];
    _id: string;
}