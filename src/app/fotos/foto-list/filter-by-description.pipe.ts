import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from './../foto/foto';

@Pipe({name:'filterByDescription'})

export class FilterByDescription implements PipeTransform{

  transform(fotos:Foto[], descriptionQuery:string){
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if(descriptionQuery){
      return fotos.filter(fotos => fotos.description.toLowerCase().includes(descriptionQuery))
    }else{
      return fotos;
    }
  }
}
