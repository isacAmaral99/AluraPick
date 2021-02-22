import { Foto } from './foto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Api = 'http://localhost:3000/';
@Injectable({providedIn: 'root'})
export class FotoService{

  constructor(private http:HttpClient){

  }
  listFromUser(userName:string){

    return this.http
    .get<Foto[]>(Api+userName+'/photos');


  }
}

