import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'items',
    loadComponent: () => import('./components/items/items.component').then((c) => c.ItemsComponent),
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadComponent: () => import('./components/items-list/items-list.component').then((c) => c.ItemsListComponent),
      },
      {
        path: 'create',
        loadComponent: () => import('./components/create-item/create-item.component').then((c) => c.CreateItemComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./components/item-details/item-details.component').then((c) => c.ItemDetailsComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
