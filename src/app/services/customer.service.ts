import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/customers';

  getCustomerList(): Observable<Customer []> {
    return this.http.get<Customer[]>(this.baseUrl + '/get');
  }
}
