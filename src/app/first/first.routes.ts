import { Routes } from '@angular/router';
import { FirstComponent } from './first.component';
import { guard } from '../guard-function';

export const first_routes: Routes = [
  {
    path: '', canActivate: [guard()],
    component: FirstComponent,
  },
];