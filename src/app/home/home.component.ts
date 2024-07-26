import { Component } from '@angular/core';
import { TipoVeiculoService } from '../service/tipo-veiculo.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy{
  inputTipoVeiculo: any;
  inputMarca: any;
  inputSubModel: any;
  marcaList: any[] | null = [];
  modeloList: any[] | null = [];
  codigo: string | undefined;

  listar: boolean = false;
  subscription: Subscription | undefined;

  constructor(private fipeService: TipoVeiculoService) {}

  buscarMarcas(tipoVeiculo: string) {
    this.subscription = this.fipeService.getMarcas(tipoVeiculo).subscribe((data: any[]) => {
    this.marcaList = data;
    });
  }

  buscarModelos(marca: string) {
    this.subscription = this.fipeService.getModelos(marca).subscribe((data: any[] | null) => {
      console.log(data);
      this.modeloList = data || [];
      });
  }

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
