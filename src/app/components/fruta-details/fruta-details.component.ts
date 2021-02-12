import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FrutaService} from '../../services/fruta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fruta-details',
  templateUrl: './fruta-details.component.html',
  styleUrls: ['./fruta-details.component.scss']
})
export class FrutaDetailsComponent implements OnInit {

  currentFruta = null;
  message = '';

  constructor(
    private frutaService: FrutaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFruta(this.route.snapshot.paramMap.get('id'));
  }

  getFruta(id): void {
    this.frutaService.get(id)
      .subscribe(
        data => {
          this.currentFruta = data.fruta;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFruta(): void {
    this.frutaService.update(this.currentFruta.id, this.currentFruta)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/frutas']);
          Swal.fire(
            '¡Actualizada!',
            'Tu fruta ha sido modificada.',
            'success'
          );
        },
        error => {
          console.log(error);
        });
  }

  deleteFruta(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Si lo eliminas no puedes revertirlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.frutaService.delete(this.currentFruta.id)
          .subscribe(
            response => {
              console.log(response);
              this.router.navigate(['/frutas']);
              Swal.fire(
                '¡Eliminado!',
                'Tu fruta ha sido eliminada.',
                'success'
              );
            },
            error => {
              console.log(error);
            });
      }
    });
  }
}
