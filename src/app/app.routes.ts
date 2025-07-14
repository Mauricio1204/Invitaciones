import { InvitacionComponent } from './templates/boda-1/boda-1/invitacion/invitacion.component';
import { PortadaComponent } from './templates/boda-1/boda-1/portada/portada.component';

import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: '**', redirectTo: '' }
];
