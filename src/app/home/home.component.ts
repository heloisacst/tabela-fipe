import { Component, inject, OnInit } from '@angular/core';
import { TipoVeiculoService } from '../service/tipo-veiculo.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inputTipoVeiculo: any;
  inputMarca: any;
  inputSubModel: any;
  marcaList: any[] | null = [];
  modeloList: any[] | null = [];
  subModeloList: any[] | null = [];
  httpClient = inject(HttpClient);
  subscription: Subscription | undefined;
  data: any[] = [];

  constructor(private fipeService: TipoVeiculoService) {}

  buscarMarcas(tipoVeiculo: string) {
    this.subscription = this.fipeService.getMarcas(tipoVeiculo).subscribe((data: any[]) => {
    this.marcaList = data;
    });
  }

  buscarModelos(marca: string) {
    this.subscription = this.fipeService.getModelos(marca).subscribe((data: any) => {
      if (data && data.modelos) {
        this.modeloList = data.modelos;
      } else {
        this.modeloList = [];
      }
      console.log(this.modeloList);
    });
  }

  buscarSubModelos(modelo: string) {
    console.log(modelo);
    this.subscription = this.fipeService.getSubModel(modelo).subscribe((data: any[]) => {
      console.log(data);
      this.subModeloList = data;
      });
  }

  ngOnInit(): void {}
}
