import { Routes } from '@angular/router';
import { PortadaComponent } from './templates/boda-1/boda-1/portada/portada.component';

export const routes: Routes = [
  {
    path: '',
    component: PortadaComponent
  },
  {
    path: 'invitacion',
    loadComponent: () =>
      import('./templates/boda-1/boda-1/invitacion/invitacion.component').then(m => m.InvitacionComponent)
  }
];
