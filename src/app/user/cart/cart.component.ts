import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  columns: string[] = ['image', 'brand', 'model', 'price', 'remove'];
  user: IUser;
  userId: string;

  total: number;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: { id: string }) => {
        this.userId = params.id;
        return this.authService.getOne(this.userId)
      })
    ).subscribe((user) => {
      this.user = user;
      this.total = this.user.cart.reduce((a, c) => a + c.price, 0);
    });
  }

  updateUser(user: IUser): void {
    this.user = user;
    this.total = this.user.cart.reduce((a, c) => a + c.price, 0);
  }

  handleEmptyCart() {
    this.authService.updateOne({ cart: [] })
      .subscribe((user: IUser) => {
        this.user = user;
        this.total = this.user.cart.reduce((a, c) => a + c.price, 0);
      })
  }

}
