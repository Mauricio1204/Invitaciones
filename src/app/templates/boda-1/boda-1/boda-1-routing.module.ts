import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Boda1Component } from './boda-1.component';
import { PortadaComponent } from './portada/portada.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

const routes: Routes = [
  {
    path: '',
    component: Boda1Component,
    children: [
      { path: '', redirectTo: 'portada', pathMatch: 'full' },
      { path: 'portada', component: PortadaComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'confirmacion', component: ConfirmacionComponent }
    ]
  },
  { path: 'boda-1/:cliente', loadChildren: () => import('./boda-1.module').then(m => m.Boda1Module) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Boda1RoutingModule {}

