import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})
export class CustomerAdd{

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private customerService = inject(CustomerService);

  customerForm: FormGroup = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    email: ['']
  });
  
  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    if(id){
      this.customerService.getCustomerById(id)
      .subscribe(customer => {
        this.customerForm.patchValue(customer);
      });
    }

  }

  onSubmit() {

    const id = this.customerForm.value.id;

    if(id) {
      this.customerService.updateCustomer(id, this.customerForm.value)
      .subscribe(() => {
        this.router.navigate(['/get']);
      });
    } else {
      this.customerService.createCustomer(this.customerForm.value)
      .subscribe(() => {
        this.router.navigate(['/get']);
      });
    }

  }

}
