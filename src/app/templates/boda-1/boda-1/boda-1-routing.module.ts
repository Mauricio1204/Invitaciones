import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PortadaComponent } from './portada/portada.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { Boda1Component } from './boda-1.component';


const routes: Routes = [
   {
    path: 'boda-1/:cliente',
    loadChildren: () =>
      import('./boda-1.module').then(m => m.Boda1Module)
  },
  { path: '**', redirectTo: 'boda-1/default' },
   {
     path: '',
     component: Boda1Component,
     children: [
       { path: '', redirectTo: 'portada', pathMatch: 'full' },
       { path: 'portada', component: PortadaComponent },
       { path: 'galeria', component: GaleriaComponent },
       { path: 'confirmacion', component: ConfirmacionComponent }
     ]
   }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Boda1RoutingModule { }
