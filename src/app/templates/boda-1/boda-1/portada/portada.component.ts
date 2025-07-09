import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement | null = null;
  audioCargado = false;
  errorAudio = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarAudio();
  }

  ngOnDestroy(): void {
    this.detenerAudio();
  }

  private cargarAudio(): void {
    try {
      // Ruta relativa al archivo de audio
      const rutaAudio = '/assets/music/La_constante.mp3';

      this.audio = new Audio(rutaAudio);
      this.audio.preload = 'auto';

      this.audio.addEventListener('canplaythrough', () => {
        this.audioCargado = true;
      });

      this.audio.addEventListener('error', () => {
        this.errorAudio = 'No se pudo cargar la música';
        this.audioCargado = false;
      });

    } catch (error) {
      console.error('Error al cargar audio:', error);
      this.errorAudio = 'Error al inicializar el reproductor';
    }
  }

  abrirInvitacion(): void {
    this.reproducirAudio();
    this.router.navigate(['invitacion']);
  }

  reproducirAudio(): void {
    if (this.audioCargado && this.audio) {
      this.audio.loop = true;
      this.audio.play()
        .then(() => console.log('Reproduciendo música...'))
        .catch(error => {
          console.warn('Error al reproducir:', error);
          this.errorAudio = 'Haz clic para activar la música';
        });
    }
  }

  detenerAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
