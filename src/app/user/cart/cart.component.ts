import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  columns: string[] = ['image', 'brand', 'model', 'price'];
  user: IUser = {
    name: 'Jane Doe',
    email: 'jane.doe@test.com',
    _id: '12345678',
    cart: [
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
      }
    ],
    wishlist: [
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
      }
    ],
    selling: [
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
      }
    ],
    owned: []
  };

  total: number = this.user.cart.reduce((a, c) => a + c.price, 0);

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   tap((params: {id: string}) => {
    //     console.log(params.id);
    //   })
    // ).subscribe(x => this.user = this.authService.getUser());
  }

}
