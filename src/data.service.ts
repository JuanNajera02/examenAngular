// data.service.ts

import { Injectable } from '@angular/core';
import { Registro } from 'src/registro';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private registros: Registro[] = [];
  private gruposUnicos = new Set<string>();
  private registroSource = new BehaviorSubject<Registro[]>(this.registros);
  private gruposSource = new BehaviorSubject<string[]>(Array.from(this.gruposUnicos));

  registro$ = this.registroSource.asObservable();
  grupos$ = this.gruposSource.asObservable();

  setRegistro(registro: Registro) {
    this.registros.push({ ...registro });
    this.actualizarGrupos();
    this.registroSource.next(this.registros);
    this.gruposSource.next(Array.from(this.gruposUnicos));
  }


eliminarRegistro(registro: Registro, index: number) {
    this.registros.splice(index, 1);
    this.actualizarGrupos();
    this.registroSource.next(this.registros);
    this.gruposSource.next(this.getGruposUnicos());

}



  getGruposUnicos(): string[] {
    return Array.from(this.gruposUnicos);
  }

  private actualizarGrupos() {
    this.gruposUnicos = new Set(this.registros.map((registro) => registro.grupo));
  }

  getCantidadPorGrupo(): Observable<{ grupo: string; cantidad: number }[]> {
    return this.registro$.pipe(
      map((registros) => {
        const cantidadPorGrupo: { grupo: string; cantidad: number }[] = [];

        const grupos = new Set(registros.map((registro) => registro.grupo));

        grupos.forEach((grupo) => {
          const cantidad = registros.filter((registro) => registro.grupo === grupo).length;
          cantidadPorGrupo.push({ grupo, cantidad });
        });

        return cantidadPorGrupo;
      })
    );
  }
}
