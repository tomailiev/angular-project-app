import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEbikeBase } from 'src/app/shared/interfaces/ebikeBase';
import { EbikesApiService } from '../ebikes-api.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private apiService: EbikesApiService, private router: Router) { }

  ngOnInit(): void {
  }

  sellSubmitHandler(data: IEbikeBase): void {
    this.apiService.createOne(data).subscribe(x => {
      console.log(x);
      this.router.navigate(['/ebikes/list']);
    });
  }
}
