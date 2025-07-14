import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DatosBoda {
  nombres: string;
  mensaje: string;
  fecha: string;
  fechaCompleta: string;
  hora: string;
  lugar: string;
  direccion: string;
  ubicacionUrl: string;
  whatsapp: string;
  cancion: string;
  imagenFondo: string;
  galeria: string[];
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
  datos: DatosBoda | null = null;
  countdown: CountdownTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  galleryImages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadWeddingData();
  }

  private loadWeddingData(): void {
    const cliente = this.route.parent?.snapshot.paramMap.get('cliente') || 'default';
    this.http.get<DatosBoda>(`/assets/clientes/boda-1/${cliente}.json`).subscribe({
      next: (data: DatosBoda) => {
        this.datos = data;
        this.processGalleryImages();
        this.startCountdown();
      },
      error: (err: Error) => console.error('Error cargando JSON:', err)
    });
  }

  private processGalleryImages(): void {
    if (this.datos?.galeria) {
      this.galleryImages = this.datos.galeria.map((img: string) =>
        `/assets/imgs/${img}`
      );
    }
  }

  private startCountdown(): void {
    if (!this.datos?.fechaCompleta) return;

    const weddingDate = new Date(this.datos.fechaCompleta).getTime();

    const updateCountdown = (): void => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        this.countdown = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
        requestAnimationFrame(updateCountdown);
      } else {
        this.countdown = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };

    updateCountdown();
  }

  confirmAttendance(): void {
    if (!this.datos) return;

    const message = `¡Confirmo mi asistencia a la boda de ${this.datos.nombres}!`;
    const whatsappUrl = `https://wa.me/${this.datos.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  openLocation(): void {
    if (this.datos?.ubicacionUrl) {
      window.open(this.datos.ubicacionUrl, '_blank');
    }
  }
}
