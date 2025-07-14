import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit, OnDestroy {
  musicaReproduciendo = false;
  audio: HTMLAudioElement | null = null;
  imagenFondo = 'assets/imgs/juan-y-paula/floral.png';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio('/assets/audio/La_constante.mp3');
      this.audio.loop = true;
      // Precargar audio (opcional)
      this.audio.load();
    }
  }

  manejarBoton(): void {
    if (!this.musicaReproduciendo && this.audio) {
      this.reproducirMusica();
    }
    this.irAInvitacion();
  }

  reproducirMusica(): void {
    if (this.audio) {
      this.audio.play()
        .then(() => this.musicaReproduciendo = true)
        .catch(e => console.error("Error al reproducir:", e));
    }
  }

  irAInvitacion(): void {
    // Navegación relativa al router actual
    this.router.navigateByUrl('/invitacion');
    // Alternativa: this.router.navigate(['/invitacion']);
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
