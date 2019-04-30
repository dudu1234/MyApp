import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Order, OrderDetails } from '../_models/order';
import { OrderStatus } from '../_models/enums';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = environment.apiUrl + 'orders/';
  constructor(private http: HttpClient) { }

  getAllOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + `GetUserOrders/${userId}`);
  }

  getOrders(userId: number, status: OrderStatus): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + `GetUserOrders/${userId}/${status}`);
  }

  getOrder(id: number): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(this.baseUrl + `${id}`);
  }
}
