import { computed, inject } from '@angular/core';
import { Product } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Toaster } from './services/toaster';
import { CartItem } from './models/cart';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItems: CartItem[];
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState({
    products: [
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
      {
        id: '4',
        name: 'Smart Coffee Maker',
        description:
          'Brew your perfect cup of coffee every morning with this Wi-Fi enabled smart coffee maker.',
        price: 149.99,
        imageUrl: 'https://picsum.photos/400/300?random=4',
        rating: 4.6,
        reviewCount: 245,
        inStock: true,
        category: 'home',
      },
      {
        id: '5',
        name: 'Air Purifier',
        description:
          'Advanced HEPA air purifier that captures 99.97% of airborne particles, perfect for bedrooms.',
        price: 199.5,
        imageUrl: 'https://picsum.photos/400/300?random=5',
        rating: 4.8,
        reviewCount: 156,
        inStock: true,
        category: 'home',
      },
      {
        id: '6',
        name: 'Robot Vacuum',
        description:
          'Smart robot vacuum cleaner with self-charging and strong suction for pet hair and hard floors.',
        price: 249.0,
        imageUrl: 'https://picsum.photos/400/300?random=6',
        rating: 4.7,
        reviewCount: 412,
        inStock: true,
        category: 'home',
      },
      {
        id: '7',
        name: 'Classic Cotton T-Shirt',
        description: 'Comfortable and breathable 100% cotton t-shirt for everyday wear.',
        price: 19.99,
        imageUrl: 'https://picsum.photos/400/300?random=7',
        rating: 4.5,
        reviewCount: 320,
        inStock: true,
        category: 'clothing',
      },
      {
        id: '8',
        name: 'Vintage Denim Jacket',
        description: 'Timeless blue denim jacket with a relaxed fit and durable stitching.',
        price: 79.5,
        imageUrl: 'https://picsum.photos/400/300?random=8',
        rating: 4.8,
        reviewCount: 115,
        inStock: true,
        category: 'clothing',
      },
      {
        id: '9',
        name: 'Running Sneakers',
        description:
          'Lightweight running shoes with responsive cushioning for your daily workouts.',
        price: 110.0,
        imageUrl: 'https://picsum.photos/400/300?random=9',
        rating: 4.7,
        reviewCount: 289,
        inStock: true,
        category: 'clothing',
      },
      {
        id: '10',
        name: 'Leather Minimalist Watch',
        description: 'Elegant analog watch with a genuine leather strap and water resistance.',
        price: 125.0,
        imageUrl: 'https://picsum.photos/400/300?random=10',
        rating: 4.9,
        reviewCount: 450,
        inStock: true,
        category: 'accessories',
      },
      {
        id: '11',
        name: 'Polarized Aviator Sunglasses',
        description:
          'Classic aviator sunglasses with polarized lenses for UV protection and glare reduction.',
        price: 45.99,
        imageUrl: 'https://picsum.photos/400/300?random=11',
        rating: 4.6,
        reviewCount: 198,
        inStock: true,
        category: 'accessories',
      },
      {
        id: '12',
        name: 'Slim RFID Blocking Wallet',
        description:
          'Compact cardholder wallet with built-in RFID blocking technology to protect your data.',
        price: 29.5,
        imageUrl: 'https://picsum.photos/400/300?random=12',
        rating: 4.8,
        reviewCount: 612,
        inStock: true,
        category: 'accessories',
      },
    ],
    category: 'all',
    wishlistItems: [],
    cartItems: [],
  } as EcommerceState),
  withComputed(({ category, products, wishlistItems, cartItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((p) => p.category === category().toLowerCase());
    }),
    wishlistCount: computed(() => wishlistItems().length),
    cartCount: computed(() => cartItems().length),
  })),
  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category: string) => {
      patchState(store, { category });
    }),
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((p) => p.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { wishlistItems: updatedWishlistItems });
      toaster.success('Product added to wishlist');
    },
    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
      });
      toaster.success('Product removed from wishlist');
    },
    clearWishlist: () => {
      patchState(store, { wishlistItems: [] });
    },
    addToCart: (product: Product, quantity = 1) => {
      const existingItemIndex = store.cartItems().findIndex((i) => i.product.id === product.id);
      const updateCartItems = produce(store.cartItems(), (draft) => {
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity += quantity;
          return;
        }
        draft.push({ product, quantity });
      });
      patchState(store, { cartItems: updateCartItems });
      toaster.success(
        existingItemIndex !== -1 ? 'Product added again' : 'Product added to the cart',
      );
    },
  })),
);
