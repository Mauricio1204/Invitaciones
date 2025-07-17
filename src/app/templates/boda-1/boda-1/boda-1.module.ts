import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boda1Component } from './boda-1.component';

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
    InvitacionComponent,
  ],
  exports:[

  ]
})
export class Boda1Module {}
