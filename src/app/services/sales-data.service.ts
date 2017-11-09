import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesDataService {

  constructor(private _http: Http) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
      .map(res => res.json());
  }

  getOrdersByCustomer(n: number) {
    return this._http.get('http://localhost:5000/api/order/bycustomer/' + n)
      .map(res => res.json());
  }

  getOrdersByState() {
    return this._http.get('http://localhost:5000/api/order/bystate/')
      .map(res => res.json());
  }
}
