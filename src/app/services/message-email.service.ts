import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class MessageEmailService {
 stadoMensaje:any;
  constructor(private _http: HttpClient) {
    
   }
   sendMessage(body) {
     try {
       return this._http.post('https://y2k32-portafolio.herokuapp.com/sendmessage', body);
     } catch (error) {
       return error;
     }
    };
}
