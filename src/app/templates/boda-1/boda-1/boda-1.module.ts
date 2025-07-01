import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boda1RoutingModule } from './boda-1-routing.module';

import { Boda1Component } from './boda-1.component';
import { PortadaComponent } from './portada/portada.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

@NgModule({
  imports: [
    CommonModule,
    Boda1RoutingModule,
    Boda1Component,
    PortadaComponent,
    GaleriaComponent,
    ConfirmacionComponent
  ]
})
export class Boda1Module {}
