import { Foto } from './foto';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  listFromUserPaginated(userName:string, page:number){
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Foto[]>(Api  +userName +'/photos',{params})
  }
}

