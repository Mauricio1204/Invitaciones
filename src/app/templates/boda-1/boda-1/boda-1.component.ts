import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './portada/portada.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boda-1',
  standalone: true,
  imports: [CommonModule, PortadaComponent, InvitacionComponent, RouterModule,],
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      max-width: 100%;
      overflow-x: hidden;
      background-color: #fff9fa;
      min-height: 100vh;
    }
  `]
})
export class Boda1Component {}
