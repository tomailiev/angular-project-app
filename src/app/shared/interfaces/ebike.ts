import { IEbikeBase } from './ebikeBase';
import { IUser } from './user';

export interface IEbike extends IEbikeBase {
    buyers: string[];
    wishlisted: string[];
    creatorId: string;
    _id: string;
}