import { Foto } from './../../foto/foto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos:Foto[]=[];

  constructor() { }

  ngOnInit() {
  }

}
