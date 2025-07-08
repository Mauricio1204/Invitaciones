import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  providers: [HttpClient] // Añade esto
})
export class PortadaComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  datos: any;
  abierto = false;
  private audio: HTMLAudioElement | null = null;

  async ngOnInit() {
    try {
      const cliente = this.route.parent?.snapshot.paramMap.get('cliente') || 'default';
      this.datos = await this.http.get(`assets/clientes/boda-1/${cliente}.json`).toPromise();
      this.playAudio();
    } catch (err) {
      console.error('Error cargando JSON', err);
      this.datos = {
        nombres: 'Sara & Joel',
        fecha: '21.08.19',
        lugar: 'Ubicación por defecto',
        cancion: 'assets/music/default.mp3'
      };
    }
  }

  abrirSobre() {
    this.abierto = true;
  }

  private playAudio() {
    if (!this.datos?.cancion) return;

    this.audio = new Audio(this.datos.cancion);
    this.audio.loop = true;
    this.audio.play().catch(err => {
      console.warn('Error reproduciendo audio:', err);
    });
  }
}
