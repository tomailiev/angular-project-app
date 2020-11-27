import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [NavigationComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
