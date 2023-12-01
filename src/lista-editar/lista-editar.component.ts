// lista-editar.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Registro } from '../registro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-editar',
  templateUrl: './lista-editar.component.html',
  styleUrls: ['./lista-editar.component.css'],
})
export class ListaEditarComponent implements OnInit {
  arregloRegistros: Registro[] = [];
  indiceEditando: number | null = null;
  registroEditando: Registro = { grupo: '', numCuenta: '', nombre: '' };
  cantidad_anteriro: number = 0;
  cantidad_final: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.obtenerRegistros();
  }

  obtenerRegistros(){
    this.dataService.registro$.subscribe((registros) => {
      if (registros.length === 0) {
        return;
      }
      this.arregloRegistros = [...registros];
      console.log(this.arregloRegistros);
    });
  }

  editarItem(index: number) {
    this.indiceEditando = index;
    this.registroEditando = { ...this.arregloRegistros[index] };
  }

  guardarEdicion() {
    if (this.indiceEditando !== null) {
      this.eliminarItem(this.indiceEditando);
      this.arregloRegistros[this.indiceEditando] = { ...this.registroEditando };
      this.dataService.setRegistro(this.registroEditando);
      this.indiceEditando = null;

    }
  }

  eliminarItem(index: number) {
      this.cantidad_anteriro = this.arregloRegistros.length;
      const registroEliminado = this.arregloRegistros[index];
      this.dataService.eliminarRegistro(registroEliminado, index);
      this.cantidad_final = this.arregloRegistros.length;
        if(this.cantidad_anteriro == this.cantidad_final){
          this.arregloRegistros.pop();
        }
    }
  }





