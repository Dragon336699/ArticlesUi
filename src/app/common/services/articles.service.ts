import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticlesDto } from '../dtos/articles.dto';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly baseUrl = 'https://localhost:44374/api/v1/articles';
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getHighlightArticles() {
    return this.httpClient.get<ArticlesDto[]>(`${this.baseUrl}/highlight`);
  }
}
