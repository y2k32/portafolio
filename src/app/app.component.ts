import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public infoPaginaService:InfoPaginaService){
    this.showModalInit();
  }

  showModalInit(){
    swal({
    imageUrl: '/src/img/nodejs.png',
    grow:'80%',
    width : '90%',
    imageAlt: 'Custom image',
    background: 'transparent',
    animation: true});
  }
}
