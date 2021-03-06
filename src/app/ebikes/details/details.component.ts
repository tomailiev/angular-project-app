import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/user/auth.service';
import { EbikesApiService } from '../ebikes-api.service';
// import {}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  ebike: IEbike;
  user: IUser
  isInCart: boolean;
  isInWishlist: boolean;

  constructor(private apiService: EbikesApiService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.route.params.pipe(
      switchMap((params: { id: string }) => {
        this.id = params.id;
        return this.apiService.getOne(this.id);
      })
    ).subscribe(ebike => {
      this.ebike = ebike;
      if (this.user) {
        this.isInCart = !!this.user.cart.find((x: IEbike) => x._id === ebike._id);
        this.isInWishlist = !!this.user.wishlist.find((x: IEbike) => x._id === ebike._id);
      }
    })
  }

  addToWishlist() {

    this.authService.updateOne({ $addToSet: { wishlist: this.ebike._id } })
      .subscribe((user: IUser) => {
        this.user = user;
        this.isInWishlist = true;
      })
  }

  addToCart() {
  
    this.authService.updateOne({ $addToSet: { cart: this.ebike._id } })
      .subscribe((user: IUser) => {
        this.user = user;
        this.isInCart = true;
      })
  }



}
