import { Routes } from '@angular/router';
import { PortadaComponent } from './templates/boda-1/boda-1/portada/portada.component';
import { InvitacionComponent } from './templates/boda-1/boda-1/invitacion/invitacion.component';


export const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'invitacion', component: InvitacionComponent },
  { path: '**', redirectTo: '' }
];
