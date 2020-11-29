import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserService } from './current-user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CurrentUserService
  ]
})
export class SharedModule { }
