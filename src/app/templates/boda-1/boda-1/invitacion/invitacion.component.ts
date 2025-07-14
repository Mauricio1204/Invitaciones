import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
  datos: any;
  daysRemaining = 0;
  hoursRemaining = 0;
  minutesRemaining = 0;
  secondsRemaining = 0;
  galleryImages: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtener los datos del estado de navegación
    const navigation = this.router.getCurrentNavigation();
    this.datos = navigation?.extras.state?.['datosBoda'];

    if (this.datos) {
      this.galleryImages = this.datos.galeria || [];
      this.startCountdown();
    } else {
      // Si no hay datos (por recarga), redirigir a portada
      this.router.navigate(['/']);
    }
  }

  startCountdown() {
    if (!this.datos?.fechaCompleta) return;

    const weddingDate = new Date(this.datos.fechaCompleta).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      this.daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        requestAnimationFrame(updateCountdown);
      }
    };

    updateCountdown();
  }

  confirmAttendance() {
    const message = `¡Confirmo mi asistencia a la boda de ${this.datos.nombres}!`;
    const whatsappUrl = `https://wa.me/${this.datos.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  openLocation() {
    window.open(this.datos.ubicacionUrl, '_blank');
  }
}
