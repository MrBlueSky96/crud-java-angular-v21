import { Component, OnInit } from '@angular/core';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {

  customers: Customer [] = [];

  ngOnInit(): void {
  }
  
}
