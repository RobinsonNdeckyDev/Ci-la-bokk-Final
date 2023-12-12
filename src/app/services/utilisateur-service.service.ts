import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  private apiUrl = "https://silabok.mouhamadoufaye.tech/api/users";
  // private apiUrl = "http://[::1]:3000/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, User);
  }

  updateUser(article: User): Observable<User> {
    const url = `${this.apiUrl}/${article.id}`;
    return this.http.put<User>(url, article);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
