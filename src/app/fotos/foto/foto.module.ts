import { HttpClientModule } from '@angular/common/http';
import { FotoComponent } from './foto.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[FotoComponent], imports:[CommonModule,HttpClientModule], exports:[FotoComponent]
})
export class FotoModule{}
