import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './no-content/no-content.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'



@NgModule({
  declarations: [NoContentComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NoContentComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
