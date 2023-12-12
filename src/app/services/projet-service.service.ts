import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {

  url = '';

  constructor(private http: HttpClient) { }
  
  getProjet() {
    return this.http.get(this.url);
  }
  
  ajouterProjet(projet:any){
    return this.http.post(this.url, projet);
  }

  modifierProjet(id:any, projet:any){
    return this.http.put(`${this.url}/${id}`, projet)
  }
 

  supprimerProjet(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
