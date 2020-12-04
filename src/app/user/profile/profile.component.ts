import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'express-validator';
import { switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  userId: string;
  editingEmail: boolean = false;
  editingName: boolean = false;

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

  updateName(newName: string): void {
    this.authService.updateOne({ name: newName })
      .subscribe(user => {
        this.user = user;
        this.toggleNameEdit();
      })
  }

  toggleNameEdit(): void {
    this.editingName = !this.editingName;
  }
}
