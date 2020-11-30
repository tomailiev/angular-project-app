import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: IUser;
  editingEmail: boolean = false;
  editingName: boolean = false;
  
  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap((params: {id: string}) => {
        console.log(params.id);
      })
    ).subscribe(x => this.user = this.authService.getUser());
  }

  toggleEmailEdit():void {
    this.editingEmail = !this.editingEmail;
  }

  toggleNameEdit():void {
    this.editingName = !this.editingName;
  }
}
