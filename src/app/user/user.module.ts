import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {TableComponent} from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    UserRoutingModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent
  ]
})
export class UserModule { }
