import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { IProduct } from '../data/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private httpClient: HttpClient) {}

  getAll(limit?: number) {
    return this.httpClient
      .get<IProduct[]>(this.baseUrl + 'products', {
        params: new HttpParams({
          fromObject: {
            limit: limit ?? -1,
          },
        }),
      })
      .pipe(
        shareReplay(),
        catchError(() => of([]))
      );
  }
}
