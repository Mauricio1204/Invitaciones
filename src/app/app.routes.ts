import { Routes } from '@angular/router';

//export const routes: Routes = [];

export const routes: Routes = [
  {
    path: 'boda-1/:cliente',
    loadChildren: () =>
      import('./templates/boda-1/boda-1/boda-1.module').then(m => m.Boda1Module)
  },
  { path: '**', redirectTo: 'boda-1/default' }
];
//templates/boda-1/boda-1.module
