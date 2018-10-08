import { Component, OnInit } from '@angular/core';
import { MessageEmailService } from '../../services/message-email.service';
import swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private alertService:any;
  constructor(public message: MessageEmailService,public infoPaginaService:InfoPaginaService) {
   }
   contactForm(form) {
      this.message.sendMessage(form).subscribe((res:any)=>{
        console.log("Res = ", res);
        if (res.ok===true) {
          swal({title:"Email",text:"Tu correo ha sido envíado", type:'success'});
        }
      });
     
    
    /* console.log("alertService "+this.message.stadoMensaje);
    if(this.message.stadoMensaje){
      
    }else{
      swal({title:"Oops...",text:"tu correo no ha sido envíado", type:'error'});
    } */
      
    
    }
  ngOnInit() {
  }
  
}
