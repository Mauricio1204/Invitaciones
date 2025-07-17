import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface DatosBoda {
  nombres?: string;
  fecha?: string;
  hora?: string;
  fechaCompleta?: string;
  lugar?: string;
  direccion?: string;
  ubicacionUrl?: string;
  whatsapp?: string;
  galeria?: string[];
}

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
  datos: DatosBoda = {}; // Inicializado como objeto vacío con interfaz
  daysRemaining = 0;
  hoursRemaining = 0;
  minutesRemaining = 0;
  secondsRemaining = 0;
  galleryImages: string[] = []; // Inicializado como array vacío

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatosInvitacion();
  }

  cargarDatosInvitacion(): void {
    const cliente = "juan-y-paula"; // Puedes hacerlo dinámico si lo necesitas

    this.http.get<DatosBoda>(`assets/clientes/boda-1/${cliente}.json`).subscribe({
      next: (data) => {
        this.datos = data;
        // Procesamiento seguro de las imágenes
        this.galleryImages = this.procesarImagenesGaleria(data.galeria);
        this.iniciarContador();
      },
      error: (err) => {
        console.error('Error cargando JSON:', err);
        this.galleryImages = []; // Asegura array vacío en caso de error
      }
    });
  }

  private procesarImagenesGaleria(galeria?: string[]): string[] {
    if (!Array.isArray(galeria)) return [];

    return galeria.map((img: string) => {
      // Elimina duplicados de la ruta si existen
      const imagen = img.replace('juan-y-paula/', '');
      return `assets/imgs/juan-y-paula/${imagen}`;
    });
  }

  iniciarContador(): void {
    if (!this.datos.fechaCompleta) return;

    const weddingDate = new Date(this.datos.fechaCompleta).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      // Math.max asegura que no haya números negativos
      this.daysRemaining = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.hoursRemaining = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutesRemaining = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.secondsRemaining = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

      if (distance > 0) {
        requestAnimationFrame(updateCountdown);
      }
    };

    updateCountdown();
  }

  confirmAttendance(): void {
    if (!this.datos.nombres || !this.datos.whatsapp) return;

    const message = `¡Confirmo mi asistencia a la boda de ${this.datos.nombres}!`;
    const whatsappUrl = `https://wa.me/${this.datos.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  openLocation(): void {
    if (this.datos.ubicacionUrl) {
      window.open(this.datos.ubicacionUrl, '_blank');
    }
  }

  // Mejora el rendimiento de *ngFor
  trackByImagen(index: number, image: string): string {
    return image;
  }
}
