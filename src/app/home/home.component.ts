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
  inputMarca: any = "Acura";
  marcas: any[] | null = [];
  modelos: any[] | null= [];
  cars: any[] = [];
  nome: string = '';
  codigo: string | undefined;

  listar: boolean = false;
  subscription: Subscription | undefined;

  constructor(private fipeService: TipoVeiculoService) {}

  buscarMarcas(tipoVeiculo: string) {
    this.subscription = this.fipeService.getMarcas(tipoVeiculo).subscribe((data: any[]) => {
    this.marcas = data;
    });
  }

  /*buscarModelos(marca: string) {
    this.subscription = this.fipeService.getModelos(marca).subscribe((data: any[] | null) => {
      this.modelos = data;
    });
    console.log(marca);
  }*/

  buscarModelos(nome: string): string | undefined {
    const car = this.cars.find(car => car.nome === nome);
    return car ? car.codigo : undefined;
  }

  buscarCodigo() {
    this.codigo = this.buscarModelos(this.nome);
  }

  listaCarros() {
    return this.listar;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
