import { FotoComponent } from './foto/foto.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FotoListComponent } from './foto-list/foto-list.component';
import { CommonModule } from '@angular/common';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-list/fotos/fotos.component';

@NgModule({
  declarations:[FotoComponent, FotoListComponent, FotoFormComponent, FotosComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
})
export class FotoModule{}
