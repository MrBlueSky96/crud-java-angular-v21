import { Routes } from '@angular/router';
import { CustomerList } from './components/customer-list/customer-list';
import { CustomerAdd } from './components/customer-add/customer-add';


export const routes: Routes = [
  { path: 'get', component: CustomerList },
  { path: 'create', component: CustomerAdd },
  { path: 'update/:id', component: CustomerAdd },
  { path: '', redirectTo: 'get', pathMatch: 'full' }
];
