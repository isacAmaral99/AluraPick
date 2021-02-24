import { DarkenOnHoverModule } from './../../shared/directives/dark-on-hover/darken-on-hover.module';
import { CardModule } from './../../shared/components/card/card.module';
import { FotoModule } from './../foto/foto.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotoListComponent } from './foto-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations:[
    FotoListComponent,
    FotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent


  ], imports:[CommonModule, FotoModule,CardModule,DarkenOnHoverModule]
})
export class FotoListModule{}
