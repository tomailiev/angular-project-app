import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(userData: {email: string, password: string, name: string}):void {
    this.authService.register(userData).subscribe(x => {
      console.log(x);
      this.router.navigate(['/user/login']);
    });
    
  }

}
