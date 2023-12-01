import { Component } from '@angular/core';
import { Registro } from 'src/registro';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

registro: Registro = {
  grupo: '',
  numCuenta: '',
  nombre: ''
};


  registrar(registro: Registro){

    if(registro.grupo == '' || registro.numCuenta == '' || registro.nombre == ''){
      alert('Todos los campos son obligatorios');
      return;
    }
    this.dataService.setRegistro(registro);
  }

  constructor(private dataService: DataService) {}




}
