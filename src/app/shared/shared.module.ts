import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './no-content/no-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NoContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NoContentComponent
  ]
})
export class SharedModule { }
