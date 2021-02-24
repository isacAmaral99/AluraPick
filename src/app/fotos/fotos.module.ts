import { FotoFormModule } from './foto-form/foto-form.module';
import { FotoListModule } from './foto-list/foto-list.module';
import { FotoModule } from './foto/foto.module';
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

  imports: [
    FotoModule,
    FotoFormModule,
    FotoListModule,


  ],
})
export class FotosModule{}
