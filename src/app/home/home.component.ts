import { Component, inject, OnInit } from '@angular/core';
import { TipoVeiculoService } from '../service/tipo-veiculo.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DadosVeiculo } from '../models/dados-veiculo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inputTipoVeiculo: any;
  inputMarca: any;
  inputSubModel: any;
  inputAno: any;

  marcaList: any[] | null = [];
  modeloList: any[] | null = [];
  subModeloList: any[] | null = [];
  dadosVeiculo: DadosVeiculo | null = null;

  isDisabled = true;

  httpClient = inject(HttpClient);
  subscription: Subscription | undefined;
  data: any[] = [];

  constructor(private fipeService: TipoVeiculoService) {}

  buscarMarcas(tipoVeiculo: string) {
    this.marcaList = null;
    this.modeloList = null;
    this.subModeloList = null;

    this.subscription = this.fipeService.getMarcas(tipoVeiculo).subscribe((data: any[]) => {
    this.marcaList = data;
    });
  }

  buscarModelos(marca: string) {
    this.modeloList = null;
    this.subModeloList = null;

    this.subscription = this.fipeService.getModelos(marca).subscribe((data: any) => {
      if (data && data.modelos) {
        this.modeloList = data.modelos;
      } else {
        this.modeloList = [];
      }
    });
  }

  buscarSubModelos(modelo: string) {
    this.inputAno = null;
    this.subscription = this.fipeService.getSubModel(modelo).subscribe((data: any) => {
      this.subModeloList = data;
      });
  }

  buscarDadosVeiculo(ano: string) {
    this.subscription = this.fipeService.getDadosVeiculo(ano).subscribe((data: any) => {
      this.dadosVeiculo = data;
    });
  }

  ngOnInit(): void {}
}
