import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  datos: any;
  abierto = false;
  audio: HTMLAudioElement | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const cliente = this.route.parent?.snapshot.paramMap.get('cliente') || 'default';
    this.http.get(`assets/clientes/boda-1/${cliente}.json`).subscribe({
      next: (data) => {
        this.datos = data;
        this.playAudio();
      },
      error: (err) => {
        console.error('Error cargando JSON', err);
        this.loadDefaultData();
      }
    });
  }

  loadDefaultData() {
    this.datos = {
      nombres: 'Sara & Joel',
      fecha: '21.08.19',
      lugar: 'Ubicación por defecto',
      cancion: 'assets/music/la_constante.mp3'
    };
  }

  abrirSobre() {
    this.abierto = true;
  }

  playAudio() {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(this.datos?.cancion);
    this.audio.loop = true;
    this.audio.play().catch(err => {
      console.warn('Reproducción automática bloqueada:', err);
    });
  }
}
