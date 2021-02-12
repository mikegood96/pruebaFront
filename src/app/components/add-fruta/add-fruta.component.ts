import { Component, OnInit } from '@angular/core';
import {FrutaService} from '../../services/fruta.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-fruta',
  templateUrl: './add-fruta.component.html',
  styleUrls: ['./add-fruta.component.scss']
})
export class AddFrutaComponent implements OnInit {

  fruta = {
    nombre: '',
    size: '',
    color: ''
  };
  submitted = false;

  constructor(private frutaService: FrutaService, private router: Router) { }

  ngOnInit(): void {}

  saveFruta(): void {
    const data = {
      nombre: this.fruta.nombre,
      size: this.fruta.size,
      color: this.fruta.color
    };

    this.frutaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          if (response.error) {
            this.submitted = false;
            Swal.fire('Falta algun campo por rellenar');
          } else {
            this.submitted = true;
            this.router.navigate(['/frutas']);
            Swal.fire('¡ Fruta creada correctamente !');
          }
        });
  }

  newFruta(): void {
    this.submitted = false;
    this.fruta = {
      nombre: '',
      size: '',
      color: ''
    };
  }

}
