import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Models } from './models';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private httpClient:HttpClient) { }
baseUrl =  "http://localhost:9090/contact"

contactuser(models:Models): Observable<object>{

return this.httpClient.post(`${this.baseUrl}/create` ,models);


}



}
