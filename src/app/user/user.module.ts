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




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    UserRoutingModule,
    MatButtonModule
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
