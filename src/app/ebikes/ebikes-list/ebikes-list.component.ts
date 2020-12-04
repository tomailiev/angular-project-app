import { Component, OnInit } from '@angular/core';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/user/auth.service';
import { EbikesApiService } from '../ebikes-api.service';

@Component({
  selector: 'app-ebikes-list',
  templateUrl: './ebikes-list.component.html',
  styleUrls: ['./ebikes-list.component.css']
})
export class EbikesListComponent implements OnInit {

  ebikes: IEbike[]; 
  user: IUser = null;

  constructor(private apiService: EbikesApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.apiService.getAll().subscribe(items => {
      console.log(items);
      
      this.ebikes = items;
    });
  }

}
