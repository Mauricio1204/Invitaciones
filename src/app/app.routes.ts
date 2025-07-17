import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./templates/boda-1/boda-1/boda-1.module').then(m => m.Boda1Module)
  },
  { path: '**', redirectTo: '' }
];
