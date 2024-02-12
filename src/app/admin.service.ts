import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Models } from './models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  baseUrl =  "http://localhost:9090/admin"
  
  contactuser(models:Models): Observable<object>{
  
    return this.httpClient.get<Models[]>(`${this.baseUrl}/lire`);
  
  
  }
}
