import { Foto } from './../../foto/foto';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {

  @Input() fotos:Foto[]=[];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.fotos)
    this.rows = this.groupColumns(this.fotos);
  }

  groupColumns(fotos: Foto[]) {
    const newRows = [];

    for (let index=0 ; index< fotos.length; index+=3){
      newRows.push(fotos.slice(index,index +3));

    }


    return newRows;
  }

}
