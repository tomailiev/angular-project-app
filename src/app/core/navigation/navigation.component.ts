import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  // isLoggedIn: boolean = false;
  // hasCart: boolean = false;

  get isLoggedIn(): boolean {
    return !!this.authService.getUser();
  }

  get currentUser(): IUser | null {
    return this.authService.getUser();
  }

  get hasCart(): boolean {
    return this.isLoggedIn ? this.authService.user.cart.length > 0 : false;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
