import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
