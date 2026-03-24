import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCard } from './interfaces/product-card';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  testProducts: ProductCard[] = [
    {
      id: 1,
      title: 'Keitech Easy Shiner',
      price: 170,
      imageUrl: '/img/products/easy-shiner.jpg',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Keitech Easy Shiner',
      price: 190,
      imageUrl: '/img/products/swing-impact.jpg',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Reins G-Tail Saturn Micro',
      price: 185,
      imageUrl: '/img/products/saturn-micro.jpg',
      isFavorite: false,
    },
  ];
}
