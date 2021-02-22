import { FotoService } from "./fotos/foto/foto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  fotos: Object[] = [];
  constructor(private fotoService: FotoService) {}

  ngOnInit(): void {
    this.fotoService
      .listFromUser("flavio")
      .subscribe((photos) => (this.fotos = photos));
  }
}
