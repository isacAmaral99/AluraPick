import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos: Object[] =[];
  constructor(http:HttpClient ){
    http
    .get<Object[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => {
        this.fotos = photos,
        err => console.log(err)
    });

  }
}
