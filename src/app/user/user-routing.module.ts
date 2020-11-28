import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'profile/:id',
                component: ProfileComponent
            },
            {
                path: 'cart/:id',
                component: CartComponent
            },
            {
                path: 'wishlist/:id',
                component: WishlistComponent
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);