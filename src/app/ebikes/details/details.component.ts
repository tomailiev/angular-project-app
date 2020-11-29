import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { EbikesApiService } from '../ebikes-api.service';
// import {}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  ebike: IEbike;

  constructor(private apiService: EbikesApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: {id: string}) => {
        this.id = params.id;
        return this.apiService.getOne(this.id);
      })
    ).subscribe(ebike => {
      this.ebike = ebike;
    })
  }

}
