import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeBailleurService {

  private apiUrl = 'https://silabok.mouhamadoufaye.tech/api'; 

  constructor(private http: HttpClient) { }

  getBailleurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listeBailleurs`);
  }

}
