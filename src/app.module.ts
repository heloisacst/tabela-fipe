import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { AboutComponent } from './app/about/about.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
