import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  user: IUser;
  userId: string;
  columns: string[] = ['image', 'brand', 'model', 'price', 'remove', 'move'];

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: { id: string }) => {
        this.userId = params.id;
        return this.authService.getOne(this.userId)
      })
    ).subscribe(user => {
      this.user = user;
    });
  }

  handleUpdate(user: IUser): void {
    this.user = user;
  }

}
