import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

  submitHandler(userData: { email: string, password: string }): void {
    console.log(userData);
    this.authService.login().subscribe(x => {
      this.authService.user = x;
      this.router.navigate(['/']);
    })
  }

}
