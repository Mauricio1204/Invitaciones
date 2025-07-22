import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


interface DatosBoda {
  nombres?: string;
  fecha?: string;
  fechaCompleta?: string;
  galeria?: string[];
  ubicacionUrl?: string;
  whatsapp?: string;
    eventos?: {
    ceremonia?: {
      lugar: string;
      fechaHora: string;
      direccion: string;
      mapaUrl: string;
      calendarioUrl?: string;
    };
    recepcion?: {
      lugar: string;
      fechaHora: string;
      direccion: string;
      mapaUrl: string;
      calendarioUrl?: string;
    };
  };
   padresPadrinos?: {
    titulo?: string;
    mensaje?: string;
    padresNovia?: { nombres: string; rol: string };
    padresNovio?: { nombres: string; rol: string };
    padrinos?: { nombres: string; rol: string }[];
  };
 dressCode?: {
    titulo?: string;
    codigo?: string;
    recomendaciones?: {
      mujeres?: string;
      hombres?: string;
      nota?: string;
    };
  };
}


@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {
   datos: DatosBoda = {};
  daysRemaining = 0;
  hoursRemaining = 0;
  minutesRemaining = 0;
  secondsRemaining = 0;
  galleryImages: string[] = [];
  imagenFondo = '/assets/imgs/juan-y-paula/floral.png';

 constructor(private http: HttpClient) {}
   ngOnInit(): void {
    this.cargarDatosInvitacion();
  }


 cargarDatosInvitacion(): void {
    const cliente = "juan-y-paula";
    this.http.get<DatosBoda>(`/assets/clientes/boda-1/${cliente}.json`).subscribe({
      next: (data) => {
        this.datos = data;
        this.galleryImages = (data.galeria || []).map(img =>
              `/assets/imgs/juan-y-paula/${img.replace('juan-y-paula/', '')}`
        );
        this.iniciarContador();
      },
      error: (err) => console.error('Error cargando JSON:', err)
    });
  }
    iniciarContador(): void {
    if (!this.datos.fechaCompleta) return;

    const weddingDate = new Date(this.datos.fechaCompleta).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      this.daysRemaining = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.hoursRemaining = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutesRemaining = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.secondsRemaining = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

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
}
