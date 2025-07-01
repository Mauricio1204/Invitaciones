import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  datos: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const cliente = this.route.parent?.snapshot.paramMap.get('cliente') || 'default';
    this.http.get(`/assets/clientes/boda-1/${cliente}.json`).subscribe(data => {
      this.datos = data;
      this.playAudio();
    });
  }

  playAudio() {
    const audio = new Audio(this.datos?.cancion);
    audio.loop = true;
    audio.play();
  }
}
