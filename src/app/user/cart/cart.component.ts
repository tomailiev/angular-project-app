import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { IEbike } from 'src/app/shared/interfaces/ebike';
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

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

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

  handleEmptyCart(): void {
    this.authService.updateOne({ cart: [] })
      .subscribe((user: IUser) => {
        this.user = user;
        this.total = this.user.cart.reduce((a, c) => a + c.price, 0);
      })
  }

  handleCheckout(): void {
    const ebikeIds = this.user.cart.map((e: IEbike) => e._id);
    this.authService.updateOne({ $addToSet: { owned: { $each: ebikeIds } }, cart: [] })
      .subscribe(
        (user: IUser) => {
          this.user = user;
          this.total = 0;
          this.openSnackBar('Purchase complete. Enjoy your ride(s)!');
        },
        (err) => {
          this.openSnackBar(err.error ? err.error.message : err.message);
        },
        () => {
          this.router.navigate(['/user/profile/', this.user._id]);
        }
      );
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Dismiss', {
      verticalPosition: 'top',
      duration: 2000
    })
  }

}
