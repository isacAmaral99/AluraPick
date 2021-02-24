import { FotoComponent } from './foto/foto.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FotoListComponent } from './foto-list/foto-list.component';
import { CommonModule } from '@angular/common';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-list/fotos/fotos.component';
import { FilterByDescription } from './foto-list/filter-by-description.pipe';
import { LoadButtonComponent } from './foto-list/load-button/load-button.component';

@NgModule({
  declarations:[FotoComponent, FotoListComponent, FotoFormComponent, FotosComponent,FilterByDescription,LoadButtonComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
})
export class FotosModule{}
