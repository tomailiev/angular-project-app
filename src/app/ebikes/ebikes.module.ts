import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell/sell.component';
import { EbikeRoutingModule } from './ebikes-routing.module';
import { EbikesListComponent } from './ebikes-list/ebikes-list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    SellComponent, 
    EbikesListComponent, 
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EbikeRoutingModule
  ],
  exports: [
    SellComponent,
    EbikesListComponent,
    DetailsComponent
  ]
})
export class EbikesModule { }
