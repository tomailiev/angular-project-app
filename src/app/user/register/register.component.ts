import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitHandler(userData: {email: string, password: string, name: string}):void {
    this.loading = true;
    this.authService.register(userData).subscribe(
      (user)=> {
        this.loading = false;
        this.openSnackBar('Successful registration. Please log in');
      },
      (err) => {
        this.loading = false;
        this.openSnackBar(err.error ? err.error.message : err.message)
      },
      () => {
        this.router.navigate(['/user/login']);
      }
    );
    
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Dismiss', {
      verticalPosition: 'top',
      duration: 2000
    })
  }

}
