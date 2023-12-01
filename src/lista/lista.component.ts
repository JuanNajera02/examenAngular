

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  cantidadPorGrupo: { grupo: string; cantidad: number }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCantidadPorGrupo().subscribe((cantidadPorGrupo) => {
      this.cantidadPorGrupo = cantidadPorGrupo;
      console.log(this.cantidadPorGrupo);
    });
  }
}
