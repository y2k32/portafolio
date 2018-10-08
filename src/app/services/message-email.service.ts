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
       return this._http.post('http://localhost:3000/sendmessage', body);
     } catch (error) {
       console.log("Hola :(", error);
       return error;
     }
    };
}
