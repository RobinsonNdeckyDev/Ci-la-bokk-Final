import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../Models/projet.model';
import { apiUrl } from './apiUrl';
import { Categorie } from '../Models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {

  constructor(private http: HttpClient) { }
  
   getAlls() : Observable<any>{
    return this.http.get<Projet[]>(`${apiUrl}/projets`);
  }
  getAllCategorie(): Observable<Categorie[]> { 
    return this.http.get<Categorie[]>(`${apiUrl}/listeCtagorie`);
  }

  getProjetById(id: number): Observable<Projet> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Projet>(url);
  }

  addProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${apiUrl}/projets`, projet);
  }

  updateProjet(projet: Projet): Observable<Projet> {
    const url = `${apiUrl}/${projet.id}`;
    return this.http.put<Projet>(url, projet);
  }

  deleteProjet(id: number): Observable<void> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
