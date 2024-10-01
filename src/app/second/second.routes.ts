import { Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { SecondChild2Component } from '../second-child2/second-child2.component';

export const second_routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: 'child1',
        loadComponent: () => import('../second-child1/second-child1.component').then(m => m.SecondChild1Component)
      },
      {
        path: 'child2', component: SecondChild2Component
      }
    ]
  },
];
