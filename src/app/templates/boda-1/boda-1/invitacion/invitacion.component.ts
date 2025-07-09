import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent {
  fechaEvento = new Date('2025-09-30');
  tiempoRestante = this.calcularTiempoRestante();
  fotosPareja = [
    'assets/imgs/juan-y-paula/foto1.jpg',
    'assets/imgs/juan-y-paula/foto2.jpg',
    'assets/imgs/juan-y-paula/foto3.jpg',
    'assets/imgs/juan-y-paula/foto3.jpg'
  ];


  private calcularTiempoRestante() {
    const ahora = new Date();
    const diff = this.fechaEvento.getTime() - ahora.getTime();

    return {
      dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    };
  }

  confirmarAsistencia() {
    window.open('https://wa.me/5215512345678?text=Confirmo%20mi%20asistencia', '_blank');
  }

  verMesaRegalos() {
    window.open('https://www.misupermesaderegalos.com/pareja', '_blank');
  }
  // Dentro de la clase:
ngOnInit() {
  interval(1000).subscribe(() => {
    this.tiempoRestante = this.calcularTiempoRestante();
  });
}
}
