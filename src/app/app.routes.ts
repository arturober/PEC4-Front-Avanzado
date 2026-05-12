import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'games',
    loadComponent: () => import('./components/game-list/game-list').then((m) => m.GameList),
  },
  {
    path: 'games/:id',
    loadComponent: () => import('./components/game-detail/game-detail').then((m) => m.GameDetail),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/games',
  },
  {
    path: '**',
    redirectTo: '/games',
  },
];
