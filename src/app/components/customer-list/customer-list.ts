import { Component, inject, OnInit, signal } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {

  private router = inject(Router);
  private customerService = inject(CustomerService);

  customers = signal<Customer[]>([]);

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomerList()
    .subscribe(customers => {
      this.customers.set(customers);
      console.log(this.customers);
    });
  }

  editCustomer(id: number) {
    this.router.navigate(['/update', id]);
  }

  deleteCustomer(id: number) {
    if(confirm("¿Seguro que quieres eliminar este customer?")) {
      this.customerService.deleteCustomer(id)
      .subscribe(() => {
        console.log("Customer " + id + " eliminado");
        this.loadCustomers();
      });
    }
  }
}
