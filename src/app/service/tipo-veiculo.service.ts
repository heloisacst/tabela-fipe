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
  private urlModelo: string = '';

  constructor(private http: HttpClient) {}

  getMarcas(tipoVeiculo: string): Observable<any[]> {
    this.url = `${this.baseUrl}${tipoVeiculo}/marcas`;
    return this.http.get<any[]>(this.url);
  }

  getModelos(marca: string): Observable<any[] | null> {
    return this.http.get<any[]>(this.url).pipe(
      switchMap(marcas => {
        if (marcas.length === 0) {
          console.error("O array de marcas está vazio.");
          return of(null);
        }

        // Encontre a marca pelo nome
        //const marcaEncontrada = marcas.find(data => data.nome === marca);

        let marcaEncontrada = {codigo: 1, nome: "Acura"}

        /*if (!marcaEncontrada) {
          console.error(`A marca "${marca}" não foi encontrada.`);
          return of(null);
        }*/

        const codigoMarca = marcaEncontrada.codigo;
        this.urlModelo = `${this.url}/${codigoMarca}/modelos`;
        console.log('getModelos=', this.urlModelo);
        return this.http.get<any[]>(this.urlModelo);
      })
    );
  }

  getSubModel(urlMarca: string, subModel: string): Observable<any[] | null> {
    return this.http.get<any[]>(urlMarca).pipe(
      switchMap(subModel => {
        if (subModel.length === 0) {
          console.error("O array de marcas está vazio.");
          return of(null);
        }

        //let subModelEncontrado = {codigo: 1}

        const codigoModelo = 1; //subModelEncontrado.codigo;
        const url = `${urlMarca}/${codigoModelo}/anos/`;
        console.log(url);
        return this.http.get<any[]>(url);
      })
    );
  }

  getUrl(): any{
    return this.urlModelo;
  }
}
