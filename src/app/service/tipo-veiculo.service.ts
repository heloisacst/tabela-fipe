import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError} from 'rxjs/operators'; // Importe o operador map aqui

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

  getModelos(modelo: string): Observable<any> {
    this.urlModelo = `${this.url}/${modelo}/modelos`;
    return this.http.get<any>(this.urlModelo).pipe(
      catchError(error => {
        console.error("Erro ao buscar modelos:", error);
        return of({ modelos: [], anos: [] });
      })
    );
  }

  getSubModel(urlMarca: string, subModel: string): Observable<any[]> {
    return this.http.get<any[]>(urlMarca).pipe(
      switchMap(subModel => {
        if (subModel.length === 0) {
          console.error("O array de modelos está vazio.");
          return of([]);
        }

        //let subModelEncontrado = {codigo: 1}

        const codigoModelo = 1; //subModelEncontrado.codigo;
        const url = `${urlMarca}/${codigoModelo}/anos/`;
        console.log(url);
        return this.http.get<any[]>(url);
      }),
      catchError(error => {
        console.error("Erro ao buscar modelos:", error);
        return of([]);
      })
    );
  }

  getUrl(): any{
    return this.urlModelo;
  }
}
