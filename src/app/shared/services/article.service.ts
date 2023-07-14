import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleInterface } from '../types/article.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleResponseInterface } from '../types/articleResponse.interface';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`;
    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article));
  }
}
