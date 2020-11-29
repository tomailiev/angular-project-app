import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEbike } from '../shared/interfaces/ebike';

@Injectable()
export class EbikesApiService {
  data: IEbike[] = [
    {
      model: 'MewModel',
      brand: 'Fast',
      description: 'this bike is fast',
      price: 2000,
      imageUrl: 'https://cdn.shopify.com/s/files/1/1520/2468/products/2020_Aventon_Level_StoneGrey_StudioPhotos_001_2000x.jpg?v=1584833716',
      buyers: [],
      wishlisted: [],
      creatorId: 'awbfhoahf089ah81424',
      _id: '1'
    },
    {
      model: 'whoModel',
      brand: 'Slow',
      description: 'this bike is fast',
      price: 1488,
      imageUrl: 'https://ebikebc.com/wp-content/uploads/2017/11/Light-Folding-Electric-Bike-16in-scaled-e1590877259232.jpg',
      buyers: [],
      wishlisted: [],
      creatorId: '123123123131232',
      _id: '2'
    },
    {
      model: 'Mediumnawdawoid',
      brand: 'Somwwhiae',
      description: 'this bike is medium',
      price: 700,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xbIEqc2gL._AC_SX425_.jpg',
      buyers: [],
      wishlisted: [],
      creatorId: 'awbfhoahf089ah81424',
      _id: '3'
    },
  ];
  constructor() { }

  getAll(): Observable<IEbike[]> {
    return of(this.data);
  }

  getOne(id:string): Observable<IEbike> {
    const doc: IEbike = this.data.find(x => x._id === id);
    return of(doc);
  }

}
