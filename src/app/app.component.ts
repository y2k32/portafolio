import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public infoPaginaService:InfoPaginaService,private spinner: NgxSpinnerService){
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2500);
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
