import { IUser } from './user';

export interface IEbike {
    brand: string;
    model: string;
    description: string;
    price: number;
    imageUrl: string;
    buyers: IUser[];
    wishlisted: IUser[];
    creatorId: IUser | string;
    _id: string;
}