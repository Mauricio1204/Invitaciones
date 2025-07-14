import { InvitacionComponent } from './invitacion/invitacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Boda1Component } from './boda-1.component';


import { GaleriaComponent } from './galeria/galeria.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { PortadaComponent } from './portada/portada.component';

const routes: Routes = [
  {
    path: '',
    component: Boda1Component,
    children: [
      { path: '', redirectTo: 'portada', pathMatch: 'full' },
      { path: 'portada', component: PortadaComponent },
      { path: 'invitacion', component: InvitacionComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'confirmacion', component: ConfirmacionComponent }
    ]
  }
];
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class Boda1RoutingModule {}
