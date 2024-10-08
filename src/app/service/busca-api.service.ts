import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaApiService{

  private baseUrl = 'https://parallelum.com.br/fipe/api/v1/';
  private url: string = '';
  private urlModelo: string = '';
  private urlSubModelo: string = '';
  private urlDadosVeiculo: string = '';

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
    return this.http.get<any>(this.urlSubModelo).pipe(
      catchError(error => {
        console.error("Erro ao buscar subModelos:", error);
        return of({ });
      })
    );
  }

  getDadosVeiculo(ano: string): Observable<any> {
    this.urlDadosVeiculo = `${this.urlSubModelo}/${ano}`;
    return this.http.get<any>(this.urlDadosVeiculo).pipe(
      catchError(error => {
        console.error("Erro ao buscar dados do veículo:", error);
        return of ({});
        })
    );
  }
}

