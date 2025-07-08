import { InvitacionComponent } from './templates/boda-1/boda-1/invitacion/invitacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PortadaComponent } from './templates/boda-1/boda-1/portada/portada.component';

export const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'invitacion', component: InvitacionComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
//templates/boda-1/boda-1.module

