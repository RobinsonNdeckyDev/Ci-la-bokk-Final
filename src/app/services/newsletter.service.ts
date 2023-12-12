import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private apiUrl = 'https://silabok.mouhamadoufaye.tech/api'; 

  constructor(private http: HttpClient) { }

  getNewsletters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/voirNewsLetters`);
  }
}
