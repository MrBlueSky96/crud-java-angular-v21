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

  createCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + '/create', customer);
  }

  getCustomerById(id: number) {
    return this.http.get<Customer>(`${this.baseUrl + '/get'}/${id}`);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.http.put(`${this.baseUrl + '/update'}/${id}`, customer);
  }

  deleteCustomer(id: number) {
  return this.http.delete(`${this.baseUrl + '/delete'}/${id}`);
  }

}
