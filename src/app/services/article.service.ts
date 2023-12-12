import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = "http://[::1]:3000/articles";
  
  
  // private apiUrl = "https://127.0.1.8000/api";


  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.apiUrl}/${article.id}`;
    return this.http.put<Article>(url, article);
  }

  deleteArticle(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
