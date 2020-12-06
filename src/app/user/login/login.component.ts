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

  loading: boolean;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.authService.warningMessage) {
      this.openSnackBar(this.authService.warningMessage);
      this.authService.warningMessage = null;
    }
  }

  submitHandler(userData: { email: string, password: string }): void {
    this.loading = true;
    this.authService.login(userData).subscribe(
      user => {
        this.loading = false;
        this.openSnackBar('Login successful');
      },
      err => {
        this.loading = false;
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
