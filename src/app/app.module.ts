import { AppRoutingModule } from './app.routing.module';
import { FotoModule } from './fotos/fotos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FotoComponent } from './fotos/foto/foto.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FotoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
