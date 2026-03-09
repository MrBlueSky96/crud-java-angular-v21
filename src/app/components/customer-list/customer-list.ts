import { Component, inject, OnInit, signal } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {

  private customerService = inject(CustomerService);

  customers = signal<Customer[]>([]);

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomerList().subscribe(
      customers => {
        this.customers.set(customers);
        // console.log(this.customers);
    });
  }
  
}
