import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; // Importe o operador map aqui

@Injectable({
  providedIn: 'root'
})
export class TipoVeiculoService{

  private baseUrl = 'https://parallelum.com.br/fipe/api/v1/';
  private url: string = '';

  constructor(private http: HttpClient) {}

  getMarcas(tipoVeiculo: string): Observable<any[]> {
    this.url = `${this.baseUrl}${tipoVeiculo}/marcas`;
    return this.http.get<any[]>(this.url);
  }

  /*getModelos(marca: string): Observable<any[] | null> {
    return this.http.get<any[]>(this.url).pipe(
      switchMap(marcas => {
        if (marcas.length === 0) {
          console.error("O array de marcas está vazio.");
          return of(null);
        }

        // Encontre a marca pelo nome
        const marcaEncontrada = marcas.find(data => data.nome === marca);

        // Verifique se a marca foi encontrada
        if (!marcaEncontrada) {
          console.error(`A marca "${marca}" não foi encontrada.`);
          return of(null);
        }

        // A marca foi encontrada, obtenha o código e faça a solicitação HTTP para os modelos
        const codigoMarca = marcaEncontrada.codigo;
        const url = `${this.url}/${codigoMarca}/modelos/`;
        return this.http.get<any[]>(url);
      })
    );
  }*/

  getModelos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
