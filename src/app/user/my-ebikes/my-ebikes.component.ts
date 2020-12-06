import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-ebikes',
  templateUrl: './my-ebikes.component.html',
  styleUrls: ['./my-ebikes.component.css']
})
export class MyEbikesComponent implements OnInit {
  user: IUser;
  userId: string;
  columns: string[] = ['image', 'brand', 'model', 'price'];

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
