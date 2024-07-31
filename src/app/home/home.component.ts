import { Component, inject, OnInit } from '@angular/core';
import { TipoVeiculoService } from '../service/tipo-veiculo.service';
import { OnDestroy } from '@angular/core';
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
  httpClient = inject(HttpClient);
  subscription: Subscription | undefined;
  data: any[] = [];

  constructor(private fipeService: TipoVeiculoService) {}

  buscarMarcas(tipoVeiculo: string) {
    this.subscription = this.fipeService.getMarcas(tipoVeiculo).subscribe((data: any[]) => {
    console.log(data);
    this.marcaList = data;
    });
  }

  buscarModelos(modelo: string) {
    this.subscription = this.fipeService.getModelos(modelo).subscribe((data: any[]) => {
      console.log(modelo);
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
/*export class HomeComponent implements OnDestroy{
  codigo: string | undefined;
  listar: boolean = false;
  subscription: Subscription | undefined;


  buscarSubModelos(subModel: string) {
    let url = this.fipeService.getUrl();
    console.log('buscarSubModelos=', url)
    this.subscription = this.fipeService.getSubModel(url, subModel).subscribe((data: any[] | null) => {
      console.log(data);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
*/
