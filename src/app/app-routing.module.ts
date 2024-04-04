import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
