import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell/sell.component';
import { EbikeRoutingModule } from './ebikes-routing.module';
import { EbikesListComponent } from './ebikes-list/ebikes-list.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { EbikesApiService } from './ebikes-api.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SellComponent,
    EbikesListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EbikeRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    SharedModule
  ],
  exports: [
    SellComponent,
    EbikesListComponent,
    DetailsComponent
  ],
  providers: [
    EbikesApiService
  ]
})
export class EbikesModule { }
