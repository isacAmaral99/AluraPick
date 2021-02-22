import { FotoService } from './fotos/foto/foto.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos: Object[] =[];
  constructor(fotoService: FotoService ){

    fotoService.listFromUser('flavio').subscribe(
      photos => this.fotos = photos
    )

  }
}
