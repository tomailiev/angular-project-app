import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { IEbikeBase } from 'src/app/shared/interfaces/ebikeBase';
import { EbikesApiService } from '../ebikes-api.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  loading: boolean;

  constructor(private apiService: EbikesApiService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sellSubmitHandler(data: IEbikeBase): void {
    this.loading = true;
    this.apiService.createOne(data).subscribe(
      (ebike: IEbike) => {
        this.loading = false;
        this.openSnackBar('Created successfully');
      },
      (err) => {
        this.openSnackBar(err.error ? err.error.message : err.message);
      },
      () => {
        this.router.navigate(['/ebikes/list']);
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
