import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info:InfoPaginaInterface;
cargada = false;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/infopage')
    .subscribe((resp:InfoPaginaInterface) =>{
      this.cargada=true;
      this.info=resp;
      console.log(this.info);
    })
   }
}
