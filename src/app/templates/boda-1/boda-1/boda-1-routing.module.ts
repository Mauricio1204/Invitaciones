import { InvitacionComponent } from './invitacion/invitacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Boda1Component } from './boda-1.component';

import { PortadaComponent } from './portada/portada.component';
const routes: Routes = [
  {
    path: '', // Ruta base vacía
    component: Boda1Component,
    children: [
      { path: '', component: PortadaComponent }, // Ruta por defecto
      { path: 'invitacion', component: InvitacionComponent }
    ]
  }
];
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class Boda1RoutingModule {}
