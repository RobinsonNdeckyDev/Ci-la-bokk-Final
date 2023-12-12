
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private apiUrl = 'https://silabok.mouhamadoufaye.tech/api'; 

  constructor(private http: HttpClient) { }

  getPorteursDeProjets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listePorteurs`);
  }
}
