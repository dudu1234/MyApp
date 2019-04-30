import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, ProductCategory } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl + 'products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'all');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + `${id}`);
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.baseUrl + `categories`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + `bycategory/${categoryId}`);
  }
}
