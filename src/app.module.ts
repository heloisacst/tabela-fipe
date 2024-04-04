import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent/*, HomeComponent*/], //retirei o home porque estava duplicando o component
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
