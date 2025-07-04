import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  standalone: true, // <-- Añade esto
  imports: [CommonModule], // <-- Añade módulos necesarios
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {
  isOpen = false;

  constructor(private router: Router) {}

  abrirSobre() {
    this.isOpen = true;
    setTimeout(() => {
      this.router.navigate(['/invitacion']);
    }, 1000);
  }
}
