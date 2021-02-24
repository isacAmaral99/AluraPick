import { FotoService } from './../foto/foto.service';
import { Foto } from './../foto/foto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{debounceTime} from 'rxjs/operators'
import { from, Subject } from 'rxjs';


@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit , OnDestroy{

  fotos: Foto[] = [];
  filter :string='';
  debounce :Subject<string> = new Subject<string>();
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


    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)

  }
  ngOnDestroy():void{
    this.debounce.unsubscribe();
  }
  load(){
    this.FotoService.listFromUserPaginated(this.userName,++this.currentPage).subscribe( fotos=> {
      this.fotos = this.fotos.concat(fotos);
      if(!fotos.length) this.hasMore= false;
    });
  }
}
