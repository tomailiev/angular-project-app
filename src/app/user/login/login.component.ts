import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitHandler(userData: { email: string, password: string }): void {
    this.authService.login(userData).subscribe(
      user => {
        this.openSnackBar('Login successful');
      },
      err => {
        this.openSnackBar(err.error ? err.error.message : err.message)
      },
      () => {
        this.router.navigate(['/']);
      }
    )
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Dismiss', {
      verticalPosition: 'top',
      duration: 2000
    })
  }

}
