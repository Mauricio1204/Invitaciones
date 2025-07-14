import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boda1Component } from './boda-1.component';
import { PortadaComponent } from './portada/portada.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { Boda1RoutingModule } from './boda-1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InvitacionComponent } from './invitacion/invitacion.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Boda1RoutingModule,
    Boda1Component,
    PortadaComponent,
    GaleriaComponent,
    ConfirmacionComponent,
    InvitacionComponent,
    HttpClientModule,

  ],
  exports:[

  ]
})
export class Boda1Module {}
