import { Component, OnInit } from '@angular/core';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { EbikesApiService } from '../ebikes-api.service';

@Component({
  selector: 'app-ebikes-list',
  templateUrl: './ebikes-list.component.html',
  styleUrls: ['./ebikes-list.component.css']
})
export class EbikesListComponent implements OnInit {

  ebikes: IEbike[]; 

  constructor(private apiService: EbikesApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(items => {
      this.ebikes = items;
    });
  }

}
