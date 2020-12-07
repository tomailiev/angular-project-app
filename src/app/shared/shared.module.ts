import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './no-content/no-content.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RePasswordValidatorDirective } from './directives/re-password-validator.directive'
import { PriceStringPipe } from './pipes/priceString';
import { StringSlicer } from './pipes/stringSlicer';
import { NumValidatorDirective } from './directives/num-validator.directive';



@NgModule({
  declarations: [
    NoContentComponent,
    LoadingComponent, 
    RePasswordValidatorDirective,
    PriceStringPipe,
    StringSlicer,
    NumValidatorDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NoContentComponent,
    LoadingComponent,
    RePasswordValidatorDirective,
    PriceStringPipe,
    StringSlicer,
    NumValidatorDirective
  ]
})
export class SharedModule { }
