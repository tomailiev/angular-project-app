import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from './details/details.component';
import { EbikesListComponent } from './ebikes-list/ebikes-list.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
    {
        path: 'ebikes',
        children: [
            {
                path: 'sell',
                component: SellComponent
            },
            {
                path: 'list',
                component: EbikesListComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent
            }
        ]
    }
];

export const EbikeRoutingModule = RouterModule.forChild(routes);