import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsPage } from './pages/products-page/products-page';
import { Header } from './widgets/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsPage, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('electronics-store');
}
