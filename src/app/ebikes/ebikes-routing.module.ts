import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/auth.guard';
import { DetailsComponent } from './details/details.component';
import { EbikesListComponent } from './ebikes-list/ebikes-list.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
    {
        path: 'ebikes',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'sell',
                component: SellComponent,
                data: { needsAuth: true }
            },
            {
                path: 'list',
                component: EbikesListComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent,
                // data: { needsAuth: true }
            }
        ]
    }
];

export const EbikeRoutingModule = RouterModule.forChild(routes);