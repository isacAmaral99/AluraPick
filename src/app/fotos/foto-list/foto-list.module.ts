import { CardModule } from './../../shared/components/card/card.module';
import { FotoModule } from './../foto/foto.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotoListComponent } from './foto-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    FotoListComponent,
    FotosComponent,
    LoadButtonComponent,
    FilterByDescription


  ], imports:[CommonModule, FotoModule,CardModule]
})
export class FotoListModule{}
