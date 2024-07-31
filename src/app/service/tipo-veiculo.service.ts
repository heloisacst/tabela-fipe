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
  private urlSubModelo: string = '';

  constructor(private http: HttpClient) {}

  getMarcas(tipoVeiculo: string): Observable<any[]> {
    this.url = `${this.baseUrl}${tipoVeiculo}/marcas`;
    return this.http.get<any[]>(this.url);
  }

  getModelos(marca: string): Observable<any> {
    this.urlModelo = `${this.url}/${marca}/modelos`;
    return this.http.get<any>(this.urlModelo).pipe(
      catchError(error => {
        console.error("Erro ao buscar modelos:", error);
        return of({ modelos: [], anos: [] });
      })
    );
  }

  getSubModel(modelo: string): Observable<any> {
    this.urlSubModelo = `${this.urlModelo}/${modelo}/anos`;
    return this.http.get<any>(this.urlModelo).pipe(
      catchError(error => {
        console.error("Erro ao buscar subModelos:", error);
        return of({ });
      })
    );
  }

  getUrl(): any{
    return this.urlModelo;
  }
}
