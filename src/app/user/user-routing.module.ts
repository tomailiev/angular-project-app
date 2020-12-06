import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/auth.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MyEbikesComponent } from './my-ebikes/my-ebikes.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: { needsAuth: false }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: { needsAuth: false }
            },
            {
                path: 'profile/:id',
                component: ProfileComponent,
                data: { needsAuth: true }
            },
            {
                path: 'cart/:id',
                component: CartComponent,
                data: { needsAuth: true }
            },
            {
                path: 'wishlist/:id',
                component: WishlistComponent,
                data: { needsAuth: true }
            },
            {
                path: 'myebikes/:id',
                component: MyEbikesComponent,
                data: { needsAuth: true }
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);