import { PhotoListResolver } from './fotos/foto-list/foto-list.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FotoFormComponent } from './fotos/foto-form/foto-form.component';
import { FotoListComponent } from './fotos/foto-list/foto-list.component';





const  routes: Routes=[
  {path :'user/:userName' , component: FotoListComponent, resolve:{
    fotos:PhotoListResolver
  }},
  {path :'user/flavio' , component: FotoFormComponent}
];

@NgModule({
 imports:[
   RouterModule.forRoot(routes)
 ], exports:[
   RouterModule
 ]
})

export class AppRoutingModule{}
