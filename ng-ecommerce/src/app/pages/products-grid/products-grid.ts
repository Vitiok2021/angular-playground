import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: `
    <div class="bg-gray-100 p-6 h-full">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ category() }}</h1>
      <div class="responsive-grid">
        @for (product of filteredProducts(); track $index) {
          <div
            class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            <img
              [src]="product.imageUrl"
              alt=""
              class="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div class="p-5 flex flex-col flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {{ product.name }}
              </h3>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');
  products = signal<Product[]>([
    {
      id: '1',
      name: 'Wireless Noise-Cancelling Headphones',
      description:
        'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
      price: 299.99,
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviewCount: 124,
      inStock: true,
      category: 'electronics',
    },
    {
      id: '2',
      name: 'Smart 4K UHD Television',
      description:
        'Immersive 4K visual experience with built-in smart home integration and voice control.',
      price: 899.5,
      imageUrl:
        'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      reviewCount: 312,
      inStock: true,
      category: 'electronics',
    },
    {
      id: '3',
      name: 'Professional Mirrorless Camera',
      description:
        'High-resolution sensor and advanced autofocus system for stunning photography and 4K video.',
      price: 1250.0,
      imageUrl:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviewCount: 89,
      inStock: true,
      category: 'electronics',
    },
  ]);
  filteredProducts = computed(() =>
    this.products().filter((p) => p.category === this.category().toLowerCase()),
  );
}
