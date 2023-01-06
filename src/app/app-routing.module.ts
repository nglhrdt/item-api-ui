import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    loadComponent: () => import('./components/items/items.component').then((c) => c.ItemsComponent),
    children: [
      {
        path: 'create',
        loadComponent: () => import('./components/items/create-item/create-item.component').then((c) => c.CreateItemComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./components/items/item-details/item-details.component').then((c) => c.ItemDetailsComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
