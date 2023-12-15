// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = "https://silabok.mouhamadoufaye.tech/api";
  

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/voirArticles`);
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/ajouterArticle`, article);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.apiUrl}/modifierArticle/{article}`;
    return this.http.put<Article>(url, article);
}


  deleteArticle(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(`${this.apiUrl}/supprimerArticle/${id}`);
  }
  
}
