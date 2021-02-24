import { FotoService } from './../foto/foto.service';
import { Foto } from './../foto/foto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{debounceTime} from 'rxjs/operators'



@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: Foto[] = [];
  filter :string='';

  hasMore:boolean = true;
  currentPage:number=1;
  userName:string='';
  constructor(

    private activatedRoute: ActivatedRoute,
    private FotoService:FotoService

    ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.fotos = this.activatedRoute.snapshot.data['fotos'];




  }

  load(){
    this.FotoService.listFromUserPaginated(this.userName,++this.currentPage).subscribe( fotos=> {
      this.filter='';
      this.fotos = this.fotos.concat(fotos);
      if(!fotos.length) this.hasMore= false;
    });
  }
}
