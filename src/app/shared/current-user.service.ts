import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable()
export class CurrentUserService {
  user: IUser = {
    name: 'Jane Doe',
    email: 'jane.doe@test.com',
    _id: '12345678',
    cart: [],
    wishlist: [],
    selling: []
  }
  constructor() { }

  getLoggedIn():boolean {
    return !!this.user;
  }

  getUser(): IUser {
    return this.user;
  }
}
