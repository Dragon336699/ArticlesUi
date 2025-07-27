import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../entity/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly baseUrl = 'https://localhost:44374/api/v1/categories';
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getCategories() {
    return this.httpClient.get<Categories[]>(`${this.baseUrl}/getAll`);
  }
}
