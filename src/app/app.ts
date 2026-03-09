import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerList } from './components/customer-list/customer-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fullstack-angular');
}
