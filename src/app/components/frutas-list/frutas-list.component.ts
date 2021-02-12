import { Component, OnInit } from '@angular/core';
import {FrutaService} from '../../services/fruta.service';

@Component({
  selector: 'app-frutas-list',
  templateUrl: './frutas-list.component.html',
  styleUrls: ['./frutas-list.component.scss']
})
export class FrutasListComponent implements OnInit {

  frutas: any;
  currentFruta = null;
  currentIndex = -1;
  nombre = '';

  constructor(private frutaService: FrutaService) { }

  ngOnInit(): void {
    this.retrieveFrutas();
  }

  retrieveFrutas(): void {
    this.frutaService.getAll()
      .subscribe(
        data => {
          this.frutas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFrutas();
    this.currentFruta = null;
    this.currentIndex = -1;
  }

  setActiveFruta(fruta, index): void {
    this.currentFruta = fruta;
    this.currentIndex = index;
  }
}
