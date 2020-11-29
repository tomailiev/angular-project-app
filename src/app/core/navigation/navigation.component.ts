import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/shared/current-user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  isLoggedIn: boolean = false;
  hasCart: boolean = false;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.currentUserService.getLoggedIn();
    this.hasCart = this.currentUserService.getUser().cart.length > 0;
  }

  logoutHandler(): void {
    console.log('loggin out in the future');
  }

}
