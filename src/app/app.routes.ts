import { Routes } from '@angular/router';
import { guard } from './guard-function';

export const routes: Routes = [
  {
    path: 'FirstComponent', canActivate: [guard()],
    loadComponent: () => import('./first/first.component').then(c => c.FirstComponent)
  },
  {
    path: 'SecondComponent', outlet: "Second",
    loadChildren: () => import('./second/second.routes').then(c => c.second_routes)
  }
];

